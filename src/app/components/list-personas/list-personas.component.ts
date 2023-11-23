import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/personas';

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements OnInit {
  listPersonas: Persona[] = [
    {
      id: 1,
      nombre: 'Fabricio',
      apellido: 'Denuncio',
      dni: '33669001',
      email: 'fabriciodenuncio@example.com',
    },
  ]

  constructor() { }

  ngOnInit() { }
}
