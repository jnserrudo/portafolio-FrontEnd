import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

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
  fecha:string;

  nombreE:string;
  descripcion:string;

  expLab?:Experiencia; //la usaremos para editar la experiencia
  @Output() eventoExp_edit=new EventEmitter<string>()
  @Output() eventoExp_eliminar=new EventEmitter<string>()




  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) {

    this.url_logo ="";
    this.nom_cargo ="";
    this.tipo_jornada=-1;
    this.nom_empresa ="";
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
    // this.url_logo =this.per_exp.url_logo;
    // this.nom_cargo =this.per_exp.nom_cargo;
    // this.tipo_jornada=this.per_exp.tipo_jornada;
    // this.nom_empresa =this.per_exp.nom_empresa;
    // //this.id_domicilio=this.per_exp.domicilio;
    // this.domicilio=this.per_exp.domicilio;
    // this.fecha_desde=this.per_exp.fecha_desde;
    // this.fecha_hasta=this.per_exp.fecha_hasta;

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    console.log(this.per_exp)
    this.nombreE=this.per_exp.nombreE
    this.descripcion=this.per_exp.descripcionE
    this.nom_cargo=this.nombreE
    this.nom_empresa=this.descripcion.split(',')[0]
    this.fecha=this.descripcion.split(',')[1]

  }

  evento_edit_exp():void{
    // const id = this.per_exp.id;
    // this.expLab=new Experiencia(this.per_exp.nombreE,this.per_exp.descripcionE)
    // this.sExperiencia.update(id, this.expLab).subscribe(
    //   data => {

    //   }, err =>{
    //      alert("Error al modificar experiencia");
    //      //this.router.navigate(['']);
    //   }
    // )
    console.log('evento hijo edit')
    this.eventoExp_edit.emit(JSON.stringify(this.per_exp))
  }

  evento_elim_exp():void{
    this.eventoExp_eliminar.emit(this.per_exp.id)

  }

}
