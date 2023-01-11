import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['../../../styles.css']
})
export class AcercaComponent implements OnInit {

  persona:persona=new persona("","","","","",0);

  descripcion:string;
  clase_vent:string;
  activar_vent:boolean;
  img_editar:string;
  constructor(public personaService:PersonaService) {//el constructor va a llamar al servicio
    this.img_editar="/assets/editar.png"
    this.clase_vent="reg";
    this.activar_vent=false
    this.descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis earum, fugit soluta quo, tempora id nesciunt a explicabo laboriosam molestiae dolorem dignissimos ipsum. Omnis, quae! Pariatur voluptates recusandae ab dolore"
  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>this.persona=data)//el suscribe conecta el observable con algunos eventos observables

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

}
