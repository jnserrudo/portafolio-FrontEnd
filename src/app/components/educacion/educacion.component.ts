import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['../../../styles.css']
})
export class EducacionComponent implements OnInit {

  lista_educacion:any;
  img_agregar:string;
  activar_vent:boolean;
  clase_vent:string;
  constructor() {
    this.activar_vent=false
    this.clase_vent="reg"
    this.img_agregar="/assets/agregar.png"
    this.lista_educacion=[
      {
        url_logo:"/assets/ucasal_logo.png",
        nom_educacion:"Ingenieria en Informatica",
        nom_institucion:"UCASAL",
        fecha_desde:"2018",
        fecha_hasta:"2023",
        id_domicilio:0,
        domicilio:"Salta-Argentina"
      },
      {
        url_logo:"/assets/ucasal_logo.png",
        nom_educacion:"Ingenieria en Informatica",
        nom_institucion:"UCASAL",
        fecha_desde:"2018",
        fecha_hasta:"2023",
        id_domicilio:0,
        domicilio:"Salta-Argentina"
      },
      {
        url_logo:"/assets/ucasal_logo.png",
        nom_educacion:"Ingenieria en Informatica",
        nom_institucion:"UCASAL",
        fecha_desde:"2018",
        fecha_hasta:"2023",
        id_domicilio:0,
        domicilio:"Salta-Argentina"
      }
    ]
   }

  ngOnInit(): void {
    //buscar el domicilio de las educaciones a traves de los id en las tablas de domicilio
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
