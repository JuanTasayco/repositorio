import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: [],
})
export class ContactMeComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  formContact: FormGroup = new FormBuilder().group({
    name: [[Validators.required], []],
    email: [],
    pais: [],
    area: [],
  });
  ngOnInit(): void {}

  enviarFormulario() {
    console.log("hola")
  }
}
