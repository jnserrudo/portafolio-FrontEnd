import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

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
  fecha:string;

  nombreE:string;
  descripcion:string;

  expLab?:Educacion; //la usaremos para editar la experiencia
  @Output() eventoEdu_edit=new EventEmitter<string>()
  @Output() eventoEdu_eliminar=new EventEmitter<string>()



  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) {
    this.url_logo ="";
    this.nom_educacion ="";
    this.nom_institucion ="";
    //this.id_domicilio=-1;
    this.domicilio="";
    this.fecha_desde="";
    this.fecha_hasta="";

    this.fecha=''

    this.nombreE="";
    this.descripcion=""
  }

  isLogged = false;

  ngOnInit(): void {
    this.url_logo =this.per_edu.url_logo;
    this.nom_educacion =this.per_edu.nom_educacion;
    this.nom_institucion =this.per_edu.nom_institucion;
    //this.id_domicilio=-1;
    this.domicilio=this.per_edu.domicilio;
    this.fecha_desde=this.per_edu.fecha_desde;
    this.fecha_hasta=this.per_edu.fecha_hasta;

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    console.log(this.per_edu)
    this.nombreE=this.per_edu.nombreE
    this.descripcion=this.per_edu.descripcionE
    this.nom_educacion=this.nombreE
    this.nom_institucion=this.descripcion.split(',')[0]
    this.fecha=this.descripcion.split(',')[1]

  }

  evento_edit_edu():void{

    console.log('evento hijo edit')
    this.eventoEdu_edit.emit(JSON.stringify(this.per_edu))
  }

  evento_elim_edu():void{
    this.eventoEdu_eliminar.emit(this.per_edu.id)

  }

}
