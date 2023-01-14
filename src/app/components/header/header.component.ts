import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../styles.css']
})
export class HeaderComponent implements OnInit {

  // persona:persona=new persona("","","","","",0);
  persona?:persona

  img_portada:string;
  img_perfil:string;
  img_editar:string;
  img_ucasal:string;


  constructor(public personaService:PersonaService,private tokenService: TokenService) {
    this.img_portada="/assets/portada.png"
    this.img_perfil="/assets/perfil.jfif"
    this.img_editar="/assets/editar.png"
    this.img_ucasal="/assets/ucasal.png"

   }
   isLogged=false

  ngOnInit(): void {
    // this.personaService.getPersona().subscribe(data=>this.persona=data)//el suscribe conecta el observable con algunos eventos observables
    this.cargarPersona()
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }
  cargarPersona():void{
    this.personaService.detail(2).subscribe(data=>{this.persona=data})
  }

}
