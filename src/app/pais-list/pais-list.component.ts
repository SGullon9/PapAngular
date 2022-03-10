import { Component, OnInit } from '@angular/core';
import { Pais } from '../models/pais';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  paises: Pais[];

  constructor(private paisService: PaisService) {
    this.paises = [];
   }

  ngOnInit() {
    this.paisService.findAll().subscribe(data => {
      this.paises = data;
    })
  }

}
