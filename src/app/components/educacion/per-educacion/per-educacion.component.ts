import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-per-educacion',
  templateUrl: './per-educacion.component.html',
  styleUrls: ['./per-educacion.component.css']
})
export class PerEducacionComponent implements OnInit {
  @Input() per_edu:any;
  url_logo :string;
  nom_educacion :string;
  nom_institucion :string;
  //id_domicilio : number;
  domicilio:string;
  fecha_desde:string;
  fecha_hasta:string;


  constructor() {
    this.url_logo ="";
    this.nom_educacion =""; 
    this.nom_institucion ="";
    //this.id_domicilio=-1;
    this.domicilio="";
    this.fecha_desde="";
    this.fecha_hasta="";
  }
  ngOnInit(): void {
    this.url_logo =this.per_edu.url_logo;
    this.nom_educacion =this.per_edu.nom_educacion; 
    this.nom_institucion =this.per_edu.nom_institucion;
    //this.id_domicilio=-1;
    this.domicilio=this.per_edu.domicilio;
    this.fecha_desde=this.per_edu.fecha_desde;
    this.fecha_hasta=this.per_edu.fecha_hasta;
  }

}
