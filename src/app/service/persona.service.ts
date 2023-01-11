import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
//definimos de donde queremos que llame al back
  URL="http://localhost:8080/personas/"
  constructor(private http:HttpClient) {

  }

  public getPersona():Observable<persona>{
    //angular usa los observables para que las peticiones sean asincronas
    return this.http.get<persona>(this.URL+'traer/perfil');
  }

}
