import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../models/persona';
import { Observable } from 'rxjs';

@Injectable()
export class PersonaService {

  private personasUrl: string;

  constructor(private http: HttpClient) {
    this.personasUrl = 'http://localhost:8080/personas';
  }

    public findAll(): Observable<Persona[]> {
      return this.http.get<Persona[]>(this.personasUrl);
    }
  
    public save(persona: Persona) {
      return this.http.post<Persona>(this.personasUrl, persona);
    }

}
