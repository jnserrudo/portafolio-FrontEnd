import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['../../../styles.css']
})
export class ProyectosComponent implements OnInit {

  proyecto:Proyecto[]=[];

  clase_vent_proy:string;
  activar_vent:boolean;
  activar_vent_elim:boolean=false;

  lista_proyectos:any;
  img_agregar:string;
  nuevo_proy:any;

  clase_vent_elim:string

  proy_edit:any;

  modo_edit:boolean;


  elim_proy_id:number=0;


  constructor(private proyectoS: ProyectoService, private tokenService: TokenService,private router: Router) {
    this.img_agregar="/assets/agregar.png"
    this.clase_vent_proy="reg";
    this.activar_vent=false
    this.clase_vent_elim='reg'

    this.modo_edit=false//esta vble me ayudara a definir el endpoint sobre el cual actuare

    this.proy_edit={
        id:0,
        nombre:"",
        url:"",
        descripcion:""

    }
    this.lista_proyectos=[
      {
        nom_proyecto:"Sistema de Acreditacion de Eventos",
        url_proyecto:"",
        descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum distinctio esse voluptatibus reiciendis quis non, perferendis architecto incidunt rerum dolorum quod dolore, voluptatum accusantium error saepe eius blanditiis minus."
      }
    ]
  }


  isLogged = false;


  ngOnInit(): void {

    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void{
    this.proyectoS.lista().subscribe(
      data =>{
        this.proyecto = data;
      }
    )
  }


  activar_ventana(band?:number):void{
    //la bandera es para ver si estamos agregando o no
    console.log(this.proy_edit)
    if(band){
      this.modo_edit=false
    }
        this.activar_vent=!this.activar_vent
        if(this.activar_vent){
          this.clase_vent_proy+=" activar"
        }
        else{
          this.clase_vent_proy="reg";
        }
        if(!this.modo_edit){
          this.proy_edit.nombre=''
          this.proy_edit.descripcion=''
          this.proy_edit.url=''

        }


        this.cargarProyecto()
      }

      delete(id?: number){
        this.proyectoS.delete(this.elim_proy_id).subscribe(
          data => {
            location.reload()
          }, err => {
            alert("No se pudo eliminar");
          }
        )
      }

  agregar_proy(nom_proy:HTMLInputElement,url_proy:HTMLInputElement,descripcion:HTMLTextAreaElement){
    this.proy_edit.nombre=nom_proy.value
    this.proy_edit.descripcion=descripcion.value
    this.proy_edit.url=url_proy.value

    let proy=new Proyecto(this.proy_edit.nombre,this.proy_edit.descripcion,this.proy_edit.url)

    if(this.modo_edit){
      //estamos editando

          this.proyectoS.update(this.proy_edit.id, proy).subscribe(
            data => {
              this.router.navigate(['']);
              location.reload()
            }, err =>{
               alert("Error al modificar Proyecto");
               //this.router.navigate(['']);
            }
          )
          this.modo_edit=false

        }else{
          //estamos agregando
          this.proyectoS.save(proy).subscribe(
            data => {
              alert("Proyecto añadido");
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


  ventana_edit_proy(per_proy:any):void{
    console.log(per_proy,this.proy_edit)
    per_proy=JSON.parse(per_proy)

    this.proy_edit.id=per_proy.id

    this.proy_edit.nombre=per_proy.nombre
    this.proy_edit.descripcion=per_proy.descripcion
    this.proy_edit.url=per_proy.url
    console.log(per_proy,this.proy_edit)

    this.modo_edit=true
    this.activar_ventana()
    console.log(this.proy_edit)
  }

  ventana_elim_proy(band:any){
    this.activar_vent_elim=!this.activar_vent_elim
    if(this.activar_vent_elim){
      this.clase_vent_elim+=" activar"
      this.elim_proy_id=band
      console.log(this.elim_proy_id)
    }
    else{
      this.clase_vent_elim="reg";
      this.elim_proy_id=0

    }

  }

}
