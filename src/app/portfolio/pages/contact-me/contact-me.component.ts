import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { gsap } from 'gsap';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: [],
})
export class ContactMeComponent implements OnInit, AfterViewInit {
  constructor() {}

  formContact: FormGroup = new FormBuilder().group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    pais: ['', [Validators.required]],
    area: ['', [Validators.required]],
  });

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    /* para validar cuando se escribe */
    this.getErrorsFormDebounce('name', 'nameInput');
    this.getErrorsFormDebounce('email', 'emailInput');
    this.getErrorsFormDebounce('pais', 'paisInput');
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

  enviarFormulario() {
    const resultado = this.formContact.value;
    console.log(resultado);
    if (this.formContact.valid) {
      console.log('formulario valido');
    } else {
      this.formContact.markAllAsTouched();
      /* para validar al dar click en send y el form es inválido */
      this.getErrorsBeforeSend('name', 'nameInput');
      this.getErrorsBeforeSend('email', 'emailInput');
      this.getErrorsBeforeSend('pais', 'paisInput');
    }
  }

  /* validacion cuando el usario empieza a escribir en el input*/
  getErrorsFormDebounce(formControlName: string, elementClass: string) {
    this.formContact
      .get(formControlName)
      ?.valueChanges.pipe(debounceTime(400))
      .subscribe(() => {
        this.validateErrorsForClass(formControlName, elementClass);
      });
  }

  /* validacion por si el usuario no escriba nada y simplemente presiona send, tomar en cuenta el markAllAsTouched antes de donde se declara esta función */
  getErrorsBeforeSend(formControlName: string, elementClass: string) {
    if (this.formContact.get(formControlName)?.touched) {
      this.validateErrorsForClass(formControlName, elementClass);
    }
  }

  /* validacion que va dentro de getErrorsFormDebounce y getErrorsBeforeSend, al escribir y al dar enviar  */
  validateErrorsForClass(formControlName: string, elementClass: string) {
    const elemento = document.querySelector(`#${elementClass}`);
    if (this.formContact.get(formControlName)?.errors) {
      elemento?.classList.remove('is-valid');
      elemento?.classList.add('is-invalid');
    } else {
      elemento?.classList.add('is-valid');
      elemento?.classList.remove('is-invalid');
    }
  }
}
