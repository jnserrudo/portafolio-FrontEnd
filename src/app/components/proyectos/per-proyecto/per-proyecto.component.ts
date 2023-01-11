import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-per-proyecto',
  templateUrl: './per-proyecto.component.html',
  styleUrls: ['./per-proyecto.component.css']
})
export class PerProyectoComponent implements OnInit {

  @Input() per_proy:any;
  nom_proyecto:string;
  descripcion:string;
  url_proyecto:string;
  constructor() {
    this.per_proy=[]
    this.nom_proyecto=""
    this.descripcion=""
    this.url_proyecto=""
  }

  ngOnInit(): void {
    this.nom_proyecto=this.per_proy.nom_proyecto
    this.descripcion=this.per_proy.descripcion
    this.url_proyecto=this.per_proy.url_proyecto
  }

}
