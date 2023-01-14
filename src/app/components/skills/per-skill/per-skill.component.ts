import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-per-skill',
  templateUrl: './per-skill.component.html',
  styleUrls: ['./per-skill.component.css']
})
export class PerSkillComponent implements OnInit {

  @Input() per_skill:any;
  nombre:string;
  nivel:number;
  porcentaje:number;


  expLab?:Skill; //la usaremos para editar la experiencia
  @Output() eventoSkill_edit=new EventEmitter<string>()
  @Output() eventoSkill_eliminar=new EventEmitter<string>()


  constructor(private sSkill:SkillService, private tokenService: TokenService) {
    this.nombre=""
    this.nivel=-1
    this.porcentaje=0

  }
  isLogged = false;


  ngOnInit(): void {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    console.log(this.per_skill)
    this.nombre=this.per_skill.nombre
    this.porcentaje=this.per_skill.porcentaje
    switch(this.porcentaje){
      case 25:
        this.nivel=1
        break;
      case 50:
        this.nivel=2
        break;
      case 75:
        this.nivel=3
        break;
      case 100:
        this.nivel=4
        break;

    }
  }

  evento_edit_skill():void{

    console.log('evento hijo edit')
    this.eventoSkill_edit.emit(JSON.stringify(this.per_skill))
  }

  evento_elim_skill():void{
    this.eventoSkill_eliminar.emit(this.per_skill.id)

  }


}
