import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {

  personas: Persona[];

  constructor(private personaService: PersonaService) { 
    this.personas = [];
  }

  ngOnInit(){
    this.personaService.findAll().subscribe(data => {
      this.personas = data;
    })
  }

}
