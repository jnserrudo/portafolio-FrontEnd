import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['../../../styles.css']
})
export class ProyectosComponent implements OnInit {

  clase_vent:string;
  activar_vent:boolean;
  lista_proyectos:any;
  img_agregar:string;
  constructor() {
    this.img_agregar="/assets/agregar.png"
    this.clase_vent="reg";
    this.activar_vent=false
    this.lista_proyectos=[
      {
        nom_proyecto:"Sistema de Acreditacion de Eventos",
        url_proyecto:"",
        descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum distinctio esse voluptatibus reiciendis quis non, perferendis architecto incidunt rerum dolorum quod dolore, voluptatum accusantium error saepe eius blanditiis minus."
      }
    ]
  }

  ngOnInit(): void {
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
