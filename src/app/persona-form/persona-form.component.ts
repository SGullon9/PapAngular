import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../services/persona.service';
import { Persona } from '../models/persona';
import { Pais } from '../models/pais';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent {

  persona: Persona;
  paises: Pais[];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private personaService: PersonaService,
    private paisService : PaisService
  ) { 

    this.persona = new Persona('','','',new Pais('',''),new Pais('',''));

    this.paises = [];
  }

  //Datos de paises para select
  ngOnInit() {
    this.paisService.findAll().subscribe(data => {
      this.paises = data;
    })
  }

  onSubmit() {
    this.personaService.save(this.persona).subscribe(result => this.gotoPersonaList());
  }

  gotoPersonaList() {
    this.router.navigate(['/personas']);
  }

}
