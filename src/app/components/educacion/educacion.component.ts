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
  nueva_edu:any
  constructor() {
    this.activar_vent=false
    this.clase_vent="reg"
    this.img_agregar="/assets/agregar.png"
    this.nueva_edu={
        url_logo:"",
        nom_educacion:"",
        nom_institucion:"",
        fecha_desde:"",
        fecha_hasta:"",
        id_domicilio:0,
        domicilio:""
    }
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


  agregar_edu(url_logo:HTMLInputElement,nom_educacion:HTMLInputElement,nom_institucion:HTMLInputElement,fecha_desde:HTMLInputElement,fecha_hasta:HTMLInputElement,actualidad:HTMLInputElement):void{
    this.nueva_edu.url_logo=url_logo.value
    this.nueva_edu.nom_educacion=nom_educacion.value
    this.nueva_edu.nom_institucion=nom_institucion.value
    this.nueva_edu.fecha_desde=fecha_desde.value
    this.nueva_edu.fecha_hasta=fecha_hasta.value
    this.nueva_edu.actualidad=actualidad.value//el value de este input, en string se tiene como "on"
    console.log(this.nueva_edu)
    /**se inserta la nueva educacion */


    //luego de insertar, se limpia para la proxima experiencia que se quiera agregar
    //hay que hacer una funcion para limpiar, porque al cancelar y al presionar la cruz tambien se deben limpiar
   /*  this.nueva_edu.url_logo=""
    this.nueva_edu.nom_cargo=""
    this.nueva_edu.nom_empresa=""
    this.nueva_edu.fecha_desde=""
    this.nueva_edu.fecha_hasta=""
    this.nueva_edu.actualidad="" */
    this.activar_ventana()

  }
}
