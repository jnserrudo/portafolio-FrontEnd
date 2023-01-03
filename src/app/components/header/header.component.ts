import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../styles.css']
})
export class HeaderComponent implements OnInit {

  img_portada:string;
  img_perfil:string;
  img_editar:string;
  img_ucasal:string;


  constructor() {
    this.img_portada="/assets/portada.png"
    this.img_perfil="/assets/paloma.jfif"
    this.img_editar="/assets/editar.png"
    this.img_ucasal="/assets/ucasal.png"

   }

  ngOnInit(): void {
  }

}
