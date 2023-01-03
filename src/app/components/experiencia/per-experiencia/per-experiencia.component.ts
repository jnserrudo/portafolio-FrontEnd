import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-per-experiencia',
  templateUrl: './per-experiencia.component.html',
  styleUrls: ['./per-experiencia.component.css']
})
export class PerExperienciaComponent implements OnInit {

  @Input() per_exp:any;
  url_logo :string;
  nom_cargo :string;
  tipo_jornada : number;
  nom_empresa :string;
  //id_domicilio : number;
  domicilio:string;
  fecha_desde:string;
  fecha_hasta:string;


  constructor() {
    this.url_logo ="";
    this.nom_cargo ="";
    this.tipo_jornada=-1;
    this.nom_empresa ="";
    //this.id_domicilio=-1;
    this.domicilio="";
    this.fecha_desde="";
    this.fecha_hasta="";
  }

  ngOnInit(): void {
    this.url_logo =this.per_exp.url_logo;
    this.nom_cargo =this.per_exp.nom_cargo;
    this.tipo_jornada=this.per_exp.tipo_jornada;
    this.nom_empresa =this.per_exp.nom_empresa;
    //this.id_domicilio=this.per_exp.domicilio;
    this.domicilio=this.per_exp.domicilio;
    this.fecha_desde=this.per_exp.fecha_desde;
    this.fecha_hasta=this.per_exp.fecha_hasta;
  }

}
