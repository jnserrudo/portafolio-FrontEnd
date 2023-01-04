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
  nuevo_proy:any;
  constructor() {
    this.img_agregar="/assets/agregar.png"
    this.clase_vent="reg";
    this.activar_vent=false
    this.nuevo_proy={
        nom_proyecto:"",
        url_proyecto:"",
        descripcion:""
      
    }
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

  agregar_proy(nom_proy:HTMLInputElement,url_proy:HTMLInputElement,descripcion:HTMLTextAreaElement){
    this.nuevo_proy.nom_proy=nom_proy.value
    this.nuevo_proy.url_proyecto=url_proy.value
    this.nuevo_proy.descripcion=descripcion.value

    /**insertar nuevo proyecto */
    //se borra para el nuevo proyecto

    //hay que hacer una funcion para limpiar, porque al cancelar y al presionar la cruz tambien se deben limpiar
    /*
    this.nuevo_proy.nom_proy=""
    this.nuevo_proy.url_proyecto=""
    this.nuevo_proy.descripcion="" */

    
    this.activar_ventana()


  }
}
