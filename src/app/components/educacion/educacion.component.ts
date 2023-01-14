import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['../../../styles.css']
})
export class EducacionComponent implements OnInit {

  educacion:Educacion[]=[];

  img_agregar:string;
  activar_vent:boolean;
  activar_vent_elim:boolean=false;


  clase_vent:string;
  clase_vent_elim:string

  //para la nueva experiencia
  nombreE:string=''
  descripcion:string=''
  edu_edit:any;

  modo_edit:boolean;


  elim_edu_id:number=0;

  constructor(private educacionS: EducacionService, private tokenService: TokenService,private router: Router) {
    this.activar_vent=false
    this.clase_vent='reg'
    this.clase_vent_elim='reg'
    this.img_agregar="/assets/agregar.png"

    this.modo_edit=false//esta vble me ayudara a definir el endpoint sobre el cual actuare

    this.edu_edit={
        id:0,
        nom_educacion:"",
        nom_institucion:"",
        fecha_desde:"",
        fecha_hasta:"",

    }

   }

   isLogged = false;

  ngOnInit(): void {

    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.educacionS.lista().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }

  activar_ventana(band?:number):void{
    //la bandera es para ver si estamos agregando o no
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
          this.edu_edit.nom_educacion=''
          this.edu_edit.nom_institucion=''
          this.edu_edit.fecha_desde=''
          this.edu_edit.fecha_hasta=''
        }


        this.cargarEducacion()
      }


  delete(id?: number){
    this.educacionS.delete(this.elim_edu_id).subscribe(
      data => {
        location.reload()
      }, err => {
        alert("No se pudo eliminar");
      }
    )
  }




  agregar_edu(url_logo:HTMLInputElement,nom_educacion:HTMLInputElement,nom_institucion:HTMLInputElement,fecha_desde:HTMLInputElement,fecha_hasta:HTMLInputElement):void{

    /**se inserta la nueva educacion */
    this.nombreE=nom_educacion.value
    this.descripcion=`${nom_institucion.value}, ${fecha_desde.value} a ${fecha_hasta.value}`

    const edu=new Educacion(this.nombreE,this.descripcion)

    if(this.modo_edit){
  //estamos editando

      this.educacionS.update(this.edu_edit.id, edu).subscribe(
        data => {
          this.router.navigate(['']);
          location.reload()
        }, err =>{
           alert("Error al modificar Educacion");
           //this.router.navigate(['']);
        }
      )
      this.modo_edit=false

    }else{
      //estamos agregando
      this.educacionS.save(edu).subscribe(
        data => {
          alert("Educacion añadida");
          location.reload()
          //this.router.navigate(['']);
        }, err => {
          alert("Falló");
          //this.router.navigate(['']);
        }
      )
    }


    this.activar_ventana()

  }


ventana_edit_edu(per_edu:any):void{
  console.log(per_edu,this.edu_edit)
  per_edu=JSON.parse(per_edu)

  this.edu_edit.id=per_edu.id

  this.edu_edit.nom_educacion=per_edu.nombreE
  this.edu_edit.nom_institucion=per_edu.descripcionE.split(',')[0]
  console.log(per_edu,this.edu_edit)

  this.edu_edit.fecha_desde=per_edu.descripcionE.split(',')[1].split('a')[0].trim()
  console.log(new Date(per_edu.descripcionE.split(',')[1].split('a')[0]),new Date(per_edu.descripcionE.split(',')[1].split('a')[1]))
  this.edu_edit.fecha_hasta=per_edu.descripcionE.split(',')[1].split('a')[1].trim()
  this.modo_edit=true
  this.activar_ventana()
  console.log(this.edu_edit)
}

ventana_elim_edu(band:any){
  this.activar_vent_elim=!this.activar_vent_elim
  if(this.activar_vent_elim){
    this.clase_vent_elim+=" activar"
    this.elim_edu_id=band
    console.log(this.elim_edu_id)
  }
  else{
    this.clase_vent_elim="reg";
    this.elim_edu_id=0

  }

}


}
