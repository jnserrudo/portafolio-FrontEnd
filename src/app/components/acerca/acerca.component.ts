import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['../../../styles.css']
})
export class AcercaComponent implements OnInit {

  persona?:persona;

  descripcion:string;
  clase_vent:string;
  activar_vent:boolean;
  img_editar:string;

  acerca_editar:string=''

  constructor(public personaService:PersonaService,private tokenService: TokenService,private router: Router) {//el constructor va a llamar al servicio
    this.img_editar="/assets/editar.png"
    this.clase_vent="reg";
    this.activar_vent=false
    this.descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis earum, fugit soluta quo, tempora id nesciunt a explicabo laboriosam molestiae dolorem dignissimos ipsum. Omnis, quae! Pariatur voluptates recusandae ab dolore"
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
    this.personaService.detail(1).subscribe(data=>{
      this.persona=data
      this.acerca_editar=this.persona.descripcion
    })
  }

  activar_ventana():void{
    this.activar_vent=!this.activar_vent
    if(this.activar_vent){
      this.clase_vent+=" activar"
    }
    else{
      this.clase_vent="reg";
    }
  }

  acerca_edit(txtarea:HTMLTextAreaElement):void{

    this.acerca_editar=txtarea.value

    let persona_acerca=new persona("Jose Nahuel","Serrudo","/assets/perfil.jfif",this.acerca_editar)

    this.personaService.update(1, persona_acerca).subscribe(
      data => {
        this.router.navigate(['']);
        location.reload()
      }, err =>{
         alert("Error al modificar Educacion");
         //this.router.navigate(['']);
      }
    )
  }

}
