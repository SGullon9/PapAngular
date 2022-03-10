import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisService } from '../services/pais.service';
import { Pais } from '../models/pais';

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-form.component.html',
  styleUrls: ['./pais-form.component.css']
})
export class PaisFormComponent {

  pais: Pais;

  constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private paisService: PaisService) { 

        this.pais = new Pais('','');
  }

  onSubmit() {
    this.paisService.save(this.pais).subscribe(result => this.gotoPaisList());
  }

  gotoPaisList() {
    this.router.navigate(['/paises']);
  }

}
