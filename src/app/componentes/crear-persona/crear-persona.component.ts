import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css'],
})
export class CrearPersonaComponent implements OnInit {
  /* crearPersonaForm: FormGroup; */

  constructor(private fb: FormBuilder) {}

  crearPersonaForm = this.fb.group({
    nombre: [''],
    apellido: [''],
    edad: [''],
    direccion: [''],
  });

  ngOnInit(): void {}

  submit() {
    debugger;
    this.crearPersonaForm.value;
  }
}
