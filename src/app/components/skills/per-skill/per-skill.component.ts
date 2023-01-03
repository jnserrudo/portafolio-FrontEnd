import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-per-skill',
  templateUrl: './per-skill.component.html',
  styleUrls: ['./per-skill.component.css']
})
export class PerSkillComponent implements OnInit {

  @Input() per_skill:any;
  nombre:string;
  nivel:number;
  porcentaje:string;
  constructor() {
    this.nombre=""
    this.nivel=-1
    this.porcentaje=""

  }

  ngOnInit(): void {
    console.log(this.per_skill)
    this.nombre=this.per_skill.nombre
    this.nivel=this.per_skill.nivel
    switch(this.nivel){
      case 1:
        this.porcentaje="25"
        break;
      case 2:
        this.porcentaje="50"
        break;
      case 3:
        this.porcentaje="75"
        break;
      case 4:
        this.porcentaje="100"
        break;

    }
  }

}
