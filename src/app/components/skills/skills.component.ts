import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['../../../styles.css']
})
export class SkillsComponent implements OnInit {

  lista_skills:any;

  constructor() {
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

}
