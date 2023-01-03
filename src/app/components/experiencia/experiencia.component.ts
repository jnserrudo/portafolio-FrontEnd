import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['../../../styles.css']
})
export class ExperienciaComponent implements OnInit {

  clase_vent:string;
  activar_vent:boolean;

  lista_experiencias:any;
  constructor() { 
    this.clase_vent="reg";
    this.activar_vent=false
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

  agregar_exp():void{
    
  }

}
