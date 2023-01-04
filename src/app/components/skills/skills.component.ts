import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['../../../styles.css']
})
export class SkillsComponent implements OnInit {

  clase_vent:string;
  activar_vent:boolean;
  lista_skills:any;
  img_cruz:string;
  img_agregar="/assets/agregar.png"
  nueva_tecnologia:any;

  constructor() {
    this.img_cruz="../assets/cruz.png"
    this.nueva_tecnologia={
      nom_tecn:"",
      nivel:""
    }
    this.clase_vent="reg";
    this.activar_vent=false
    this.lista_skills=[
      {
        nombre:"JavaScript",
        nivel:3
      },
      {
        nombre:"React",
        nivel:2
      },
      {
        nombre:"SQL",
        nivel:3
      },{
        nombre:"Angular",
        nivel:2
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

  agregar_tecnologia(nom:HTMLInputElement,nivel:HTMLSelectElement):void{
    this.nueva_tecnologia.nom_tecn=nom
    this.nueva_tecnologia.nivel=nivel
    //
    //enviando a la api
    console.log(this.nueva_tecnologia)
    //luego de enviar
    this.nueva_tecnologia.nom_tecn=""
    this.nueva_tecnologia.nivel=""
    nom.value=""
    nivel.options[0].selected=true
    this.activar_ventana()

    //hay que hacer una funcion para limpiar, porque al cancelar y al presionar la cruz tambien se deben limpiar
    
  }
}
