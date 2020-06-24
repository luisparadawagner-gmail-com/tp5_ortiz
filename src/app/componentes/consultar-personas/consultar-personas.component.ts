import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultarPersonaService } from './../../servicios/consultar-persona.service';

export interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  direccion: string;
}

@Component({
  selector: 'app-consultar-personas',
  templateUrl: './consultar-personas.component.html',
  styleUrls: ['./consultar-personas.component.css'],
})
export class ConsultarPersonasComponent implements OnInit {
  @Input() consultarPersona: any;

  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'edad',
    'direccion',
    'editar',
  ];
  dataSource: any[] = [];

  constructor(
    private router: Router,
    private consultarPersonaService: ConsultarPersonaService
  ) {}

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas() {
    this.consultarPersonaService.getPersonas().subscribe((personas) => {
      this.dataSource = personas;
    });
  }

  editarPersona(element) {
    debugger;
    this.router.navigate(['/crear-persona', element]);
  }
}
