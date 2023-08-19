import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: [],
})
export class ContactMeComponent implements OnInit, AfterViewInit {
  constructor(private formBuilder: FormBuilder) {}

  formContact: FormGroup = new FormBuilder().group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    pais: ['', [Validators.required]],
    area: ['', [Validators.required]],
  });

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.getErrorsForm('name', 'nameInput');
    this.getErrorsForm('email', 'emailInput');
    this.getErrorsForm('pais', 'paisInput');
  }

  /* controla el mensaje a mostrar, el getErrorsForm decide si se muestra el error o el checkGood */
  get validateErrorName(): string {
    const error = this.formContact.get('name')?.errors;
    if (error?.['required']) {
      return 'Este campo no puede estar vacio';
    }
    return '';
  }

  get validateEmailError(): string {
    const error = this.formContact.get('email')?.errors;
    if (error?.['email']) {
      return 'El formato de email no es correcto';
    } else if (error?.['required']) {
      return 'Este campo no puede estar vacio';
    } else {
      return '';
    }
  }

  get validateErrorCountry(): string {
    const error = this.formContact.get('pais')?.errors;
    if (error?.['required']) {
      return 'Este campo no puede estar vacio';
    }
    return '';
  }

  getTextUser(event: Event) {
    /* console.log((event?.target as HTMLInputElement).value); */
  }

  enviarFormulario() {
    const resultado = this.formContact.value;
    if (this.formContact.valid) {
    } else {
      this.formContact.markAsTouched();
      console.log('el formulario no es valido');
    }
  }

  getErrorsForm(formControlName: string, elementClass: string) {
    this.formContact
      .get(formControlName)
      ?.valueChanges.pipe(debounceTime(400))
      .subscribe(() => {
        const elemento = document.querySelector(`#${elementClass}`);
        if (this.formContact.get(formControlName)?.errors) {
          console.log(this.formContact.get(formControlName)?.errors);
          elemento?.classList.remove('is-valid');
          elemento?.classList.add('is-invalid');
        } else {
          elemento?.classList.add('is-valid');
          elemento?.classList.remove('is-invalid');
        }
      });
  }
}
