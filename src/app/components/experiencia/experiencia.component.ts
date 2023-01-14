import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { window } from 'rxjs';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['../../../styles.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];
  clase_vent:string;
  clase_vent_elim:string='reg';

  activar_vent:boolean;
  activar_vent_elim:boolean=false;


  //para la nueva experiencia
  nombreE:string=''
  descripcion:string=''
  edit_exp:any;

  exp_edit:any={
    nombreE:'',
    descripcion:''
  }
  modo_edit:boolean;


  elim_exp_id:number=0;

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService,private router: Router) {
    this.clase_vent="reg";
    this.activar_vent=false

    this.modo_edit=false//esta vble me ayudara a definir el endpoint sobre el cual actuare
    this.edit_exp={
      id:0,
      nom_cargo:"",
      nom_empresa:"",
      fecha_desde:"",
      fecha_hasta:"",
      descripcion:""

    }
  }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  activar_ventana(band?:number):void{
//la bandera es para ver si estamos agregando o no
if(!this.activar_vent_elim){

  if(band){
    this.modo_edit=false
  }
      this.activar_vent=!this.activar_vent
      if(this.activar_vent){
        this.clase_vent+=" activar"
      }
      else{
        this.clase_vent="reg";
      }
      if(!this.modo_edit){
        this.edit_exp.nom_cargo=''
        this.edit_exp.nom_empresa=''
        this.edit_exp.fecha_desde=''
        this.edit_exp.fecha_hasta=''
        this.edit_exp.descripcion=''
      }


      this.cargarExperiencia()
}else{
  this.activar_vent_elim=!this.activar_vent_elim

  this.clase_vent_elim='reg'
}


  }


  get_inputs(nom_cargo:HTMLInputElement,nom_empresa:HTMLInputElement,fecha_desde:HTMLInputElement,fecha_hasta:HTMLInputElement):void{
      this.edit_exp.nom_cargo=nom_cargo
      this.edit_exp.nom_empresa=nom_empresa
      this.edit_exp.fecha_desde=fecha_desde
      this.edit_exp.fecha_hasta=fecha_hasta
      console.log(this.edit_exp)
  }

  agregar_exp(nom_cargo:HTMLInputElement,nom_empresa:HTMLInputElement,fecha_desde:HTMLInputElement,fecha_hasta:HTMLInputElement,descripcion_exp:HTMLTextAreaElement):void{
  //   this.nueva_exp.url_logo=url_logo.value
  //   this.nueva_exp.nom_cargo=nom_cargo.value
  //   this.nueva_exp.nom_empresa=nom_empresa.value
  //   this.nueva_exp.fecha_desde=fecha_desde.value
  //   this.nueva_exp.fecha_hasta=fecha_hasta.value
  //   this.nueva_exp.actualidad=actualidad.value//el value de este input, en string se tiene como "on"
  //   console.log(this.nueva_exp)
  //   /**se inserta la nueva experiencia */


  //   //luego de insertar, se limpia para la proxima experiencia que se quiera agregar
  //  /*  this.nueva_exp.url_logo=""
  //   this.nueva_exp.nom_cargo=""
  //   this.nueva_exp.nom_empresa=""
  //   this.nueva_exp.fecha_desde=""
  //   this.nueva_exp.fecha_hasta=""
  //   this.nueva_exp.actualidad="" */
  this.nombreE=nom_cargo.value
  this.descripcion=`${nom_empresa.value}, ${fecha_desde.value} a ${fecha_hasta.value}, ${descripcion_exp.value}`

  const expe=new Experiencia(this.nombreE,this.descripcion)

  if(this.modo_edit){
//estamos editando

    this.sExperiencia.update(this.edit_exp.id, expe).subscribe(
      data => {
        this.router.navigate(['']);
        location.reload()
      }, err =>{
         alert("Error al modificar experiencia");
         //this.router.navigate(['']);
      }
    )
    this.modo_edit=false

  }else{
    //estamos agregando
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        location.reload()
        //this.router.navigate(['']);
      }, err => {
        alert("Falló");
        //this.router.navigate(['']);
      }
    )
  }


    //hay que hacer una funcion para limpiar, porque al cancelar y al presionar la cruz tambien se deben limpiar

    this.activar_ventana()

  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; })
  }

ventana_edit_exp(per_exp:any):void{
      console.log(per_exp,this.edit_exp)
      per_exp=JSON.parse(per_exp)

      this.edit_exp.id=per_exp.id

      this.edit_exp.nom_cargo=per_exp.nombreE
      this.edit_exp.nom_empresa=per_exp.descripcionE.split(',')[0]
      console.log(per_exp,this.edit_exp)

      this.edit_exp.fecha_desde=per_exp.descripcionE.split(',')[1].split('a')[0].trim()
      console.log(new Date(per_exp.descripcionE.split(',')[1].split('a')[0]),new Date(per_exp.descripcionE.split(',')[1].split('a')[1]))
      this.edit_exp.fecha_hasta=per_exp.descripcionE.split(',')[1].split('a')[1].trim()
      this.edit_exp.descripcion=per_exp.descripcionE.split(',')[2]
      this.modo_edit=true
      this.activar_ventana()
      console.log(this.edit_exp)
}

ventana_elim_exp(band:any){
  this.activar_vent_elim=!this.activar_vent_elim
  if(this.activar_vent_elim){
    this.clase_vent_elim+=" activar"
    this.elim_exp_id=band
    console.log(this.elim_exp_id)
  }
  else{
    this.clase_vent_elim="reg";
    this.elim_exp_id=0

  }

}





  delete(id?: number){
    this.sExperiencia.delete(this.elim_exp_id).subscribe(
      data => {
        // this.cargarExperiencia();
        location.reload()
      }, err => {
        alert("No se pudo borrar la experiencia");
      }
    )
  }


}
