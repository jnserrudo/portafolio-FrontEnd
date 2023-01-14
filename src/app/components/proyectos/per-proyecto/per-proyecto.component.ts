import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-per-proyecto',
  templateUrl: './per-proyecto.component.html',
  styleUrls: ['./per-proyecto.component.css']
})
export class PerProyectoComponent implements OnInit {

  @Input() per_proy:any;
  nombre:string;
  descripcion:string;
  url:string;


  @Output() eventoProy_edit=new EventEmitter<string>()
  @Output() eventoProy_eliminar=new EventEmitter<string>()

  constructor(private proyectoS: ProyectoService, private tokenService: TokenService,private router: Router) {
    this.nombre=""
    this.descripcion=""
    this.url=""
  }

  isLogged = false;

  ngOnInit(): void {
    this.nombre=this.per_proy.nombre
    this.descripcion=this.per_proy.descripcion
    this.url=this.per_proy.url

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  evento_edit_proy():void{

    console.log('evento hijo edit')
    this.eventoProy_edit.emit(JSON.stringify(this.per_proy))
  }

  evento_elim_proy():void{
    this.eventoProy_eliminar.emit(this.per_proy.id)

  }
}
