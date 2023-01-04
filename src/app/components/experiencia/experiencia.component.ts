import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['../../../styles.css']
})
export class ExperienciaComponent implements OnInit {

  clase_vent:string;
  activar_vent:boolean;
  nueva_exp:any;

  lista_experiencias:any;
  constructor() { 
    this.clase_vent="reg";
    this.activar_vent=false
    this.nueva_exp={
      url_logo:"",
      nom_cargo:"",
      nom_empresa:"",
      fecha_desde:"",
      fecha_hasta:"",
      id_domicilio:0,
      domicilio:""//este campo estara vacio al principio
      //luego se completara con la busqueda del id_domicilio
    }
    this.lista_experiencias=[
      {
        url_logo:"/assets/ucasal_logo.png",
        nom_cargo:"Programador Jr.",
        nom_empresa:"UCASAL",
        fecha_desde:"Feb 2022",
        fecha_hasta:"Actualidad",
        id_domicilio:0,
        domicilio:"Salta-Argentina"//este campo estara vacio al principio
        //luego se completara con la busqueda del id_domicilio
      },
      {
        url_logo:"/assets/ucasal_logo.png",
        nom_cargo:"Programador Jr.",
        nom_empresa:"UCASAL",
        fecha_desde:"Feb 2022",
        fecha_hasta:"Actualidad",
        id_domicilio:0,
        domicilio:"Salta-Argentina"//este campo estara vacio al principio
        //luego se completara con la busqueda del id_domicilio
      }
      ,{
        url_logo:"/assets/ucasal_logo.png",
        nom_cargo:"Programador Jr.",
        nom_empresa:"UCASAL",
        fecha_desde:"Feb 2022",
        fecha_hasta:"Actualidad",
        id_domicilio:0,
        domicilio:"Salta-Argentina"//este campo estara vacio al principio
        //luego se completara con la busqueda del id_domicilio
      }
      ,{
        url_logo:"/assets/ucasal_logo.png",
        nom_cargo:"Programador Jr.",
        nom_empresa:"UCASAL",
        fecha_desde:"Feb 2022",
        fecha_hasta:"Actualidad",
        id_domicilio:0,
        domicilio:"Salta-Argentina"//este campo estara vacio al principio
        //luego se completara con la busqueda del id_domicilio
      }
    ]
  }

  ngOnInit(): void {
    //en esta parte debere tomar todos los id_domicilio 
    //para completar el campo domicilio en la busqueda de la tabla
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

  agregar_exp(url_logo:HTMLInputElement,nom_cargo:HTMLInputElement,nom_empresa:HTMLInputElement,fecha_desde:HTMLInputElement,fecha_hasta:HTMLInputElement,actualidad:HTMLInputElement):void{
    this.nueva_exp.url_logo=url_logo.value
    this.nueva_exp.nom_cargo=nom_cargo.value
    this.nueva_exp.nom_empresa=nom_empresa.value
    this.nueva_exp.fecha_desde=fecha_desde.value
    this.nueva_exp.fecha_hasta=fecha_hasta.value
    this.nueva_exp.actualidad=actualidad.value//el value de este input, en string se tiene como "on"
    console.log(this.nueva_exp)
    /**se inserta la nueva experiencia */


    //luego de insertar, se limpia para la proxima experiencia que se quiera agregar
   /*  this.nueva_exp.url_logo=""
    this.nueva_exp.nom_cargo=""
    this.nueva_exp.nom_empresa=""
    this.nueva_exp.fecha_desde=""
    this.nueva_exp.fecha_hasta=""
    this.nueva_exp.actualidad="" */


    //hay que hacer una funcion para limpiar, porque al cancelar y al presionar la cruz tambien se deben limpiar
    
    this.activar_ventana()

  }

}
