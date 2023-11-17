import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: [],
})
export class ContactMeComponent implements OnInit, AfterViewInit {
  constructor() {}

  formContact: FormGroup = new FormBuilder().group({
    name: ['Prueba1', Validators.required],
    email: [
      'jhonn28_4@hotmail.com',
      [Validators.required, Validators.email, Validators.minLength(3)],
    ],
    pais: ['Perú', [Validators.required]],
    asunto: ['Pagina Web', [Validators.required]],
    area: [
      'Hola necesito comunicar contigo para desarrollar una nueva web desde 0',
      [],
    ],
  });

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    /* para validar cuando se escribe */
    this.getErrorsFormDebounce('name', 'nameInput');
    this.getErrorsFormDebounce('email', 'emailInput');
    this.getErrorsFormDebounce('pais', 'paisInput');
  }

  validateErrors(control: string): string {
    const errors = this.formContact.get(control)?.errors;
    /*    type tipos = 'required' | 'email' | 'minLength'; */
    /* Record permite agregar objetos cuyas claves de propiedad son las keys (ejm: tipos) y los valores son un type (ejm una interface Gato{nombre:string, color:string}) */
    const tableError: Record<string, string> = {
      required: 'Este campo no puede estar vacío',
      email: 'El formato de Email no es correcto',
      minLength: 'Deben existir al menos 3 caracteres',
    };

    if (errors) {
      const value: string = Object.getOwnPropertyNames(errors)[0];
      return tableError[value];
    } else {
      return '';
    }
  }

  enviarFormulario() {
    const resultado = this.formContact.value;
    if (this.formContact.valid) {
      console.log('formulario valido');
    } else {
      this.formContact.markAllAsTouched();
      /* para validar al dar click en send y el form es inválido */
      this.getErrorsBeforeSend('name', 'nameInput');
      this.getErrorsBeforeSend('email', 'emailInput');
      this.getErrorsBeforeSend('pais', 'paisInput');
      this.getErrorsBeforeSend('asunto', 'asuntoInput');
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
