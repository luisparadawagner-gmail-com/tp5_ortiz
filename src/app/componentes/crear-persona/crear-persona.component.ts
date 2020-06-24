import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Persona } from '../clases/Persona';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css'],
})
export class CrearPersonaComponent implements OnInit {
  @Input() crearPersona: any;

  constructor(private fb: FormBuilder, private rutaActiva: ActivatedRoute) {}

  crearPersonaForm: FormGroup;
  persona: Persona;
  param: any;

  showConsultarPersona: boolean = false;

  ngOnInit() {
    debugger;

    this.param = this.rutaActiva.snapshot.params;

    if (Object.keys(this.param).length) {
      this.persona = this.param;
    } else {
      this.persona = this.crearPersona;
    }

    this.initForm(this.persona);
  }

  initForm(editar: Persona) {
    this.crearPersonaForm = this.fb.group({
      nombre: [editar.nombre ? editar.nombre : ''],
      apellido: [editar.apellido ? editar.apellido : ''],
      edad: [editar.edad ? editar.edad : ''],
      direccion: [editar.direccion ? editar.direccion : ''],
    });
  }

  submit() {
    debugger;
    this.crearPersona = this.crearPersonaForm.value;
    this.showConsultarPersona = true;
  }
}
