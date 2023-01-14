import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['../../../styles.css']
})
export class SkillsComponent implements OnInit {
  skill:Skill[] = [];
  clase_vent_elim:string='reg';

  elemento_select:any=''


  clase_vent_skill:string;
  activar_vent:boolean;
  activar_vent_elim:boolean=false;

  index:boolean[]=[true,false,false,false,false];


  lista_skills:any;
  img_cruz:string;
  img_agregar="/assets/agregar.png"


  //para la nueva skill
  nombre:string=''
  porcentaje:number=0
  skill_edit:any;


  modo_edit:boolean=false;

  elim_skill_id:number=0;


  constructor(private sSkill:SkillService, private tokenService: TokenService,private router: Router) {
    this.img_cruz="../assets/cruz.png"
    this.skill_edit={
      nombre:"",
      porcentaje:0
    }
    this.clase_vent_skill="reg";
    this.activar_vent=false
    // this.lista_skills=[
    //   {
    //     nombre:"JavaScript",
    //     nivel:3
    //   },
    //   {
    //     nombre:"React",
    //     nivel:2
    //   },
    //   {
    //     nombre:"SQL",
    //     nivel:3
    //   },{
    //     nombre:"Angular",
    //     nivel:2
    //   }
    // ]
   }


   isLogged = false;


  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void{
    this.sSkill.lista().subscribe(
      data =>{
        this.skill = data;
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
      this.clase_vent_skill+=" activar"
    }
    else{
      this.clase_vent_skill="reg";
    }
    if(!this.modo_edit){
      this.skill_edit.nombre=''
      this.skill_edit.porcentaje=0
    }


    this.cargarSkill()



  }



  delete(id?: number){
    this.sSkill.delete(this.elim_skill_id).subscribe(
      data => {
        location.reload()
      }, err => {
        alert("No se pudo eliminar");
      }
    )
    this.index=this.index.map((p,i)=>i==0?true:false)


  }


  agregar_tecnologia(nom:HTMLInputElement,nivel:HTMLSelectElement):void{
    this.nombre=nom.value
    this.porcentaje=parseInt(nivel.options[nivel.selectedIndex].textContent??"")
    //

    const new_skill=new Skill(this.nombre,this.porcentaje)

    console.log(new_skill)
    if(this.modo_edit){
  //estamos editando

      this.sSkill.update(this.skill_edit.id, new_skill).subscribe(
        data => {
          this.router.navigate(['']);
          location.reload()
        }, err =>{
           alert("Error al Tecnologia");
           //this.router.navigate(['']);
        }
      )
      this.modo_edit=false

    }else{
      //estamos agregando
      this.sSkill.save(new_skill).subscribe(
        data => {
          alert("Tecnologia añadida");
          location.reload()
          //this.router.navigate(['']);
        }, err => {
          alert("Falló");
          //this.router.navigate(['']);
        }
      )
    }


    this.activar_ventana()

  this.index=this.index.map((p,i)=>i==0?true:false)




    // //enviando a la api
    // console.log(this.skill_edit)
    // //luego de enviar
    // this.skill_edit.nombre=""
    // this.skill_edit.porcentaje=""
    // nom.value=""
    // nivel.options[0].selected=true
    // this.activar_ventana()

    //hay que hacer una funcion para limpiar, porque al cancelar y al presionar la cruz tambien se deben limpiar

  }



  ventana_edit_skill(per_skill:any):void{
    console.log(per_skill,this.skill_edit)

    per_skill=JSON.parse(per_skill)

    this.skill_edit.id=per_skill.id

    this.skill_edit.nombre=per_skill.nombre
    console.log(this.skill_edit.porcentaje)

    this.skill_edit.porcentaje=per_skill.porcentaje

    let indice_cambiar=0
    if(this.skill_edit.porcentaje==100){
      indice_cambiar=4
    }
    if(this.skill_edit.porcentaje==75){
      indice_cambiar=3
    }
    if(this.skill_edit.porcentaje==50){
      indice_cambiar=2
    }
    if(this.skill_edit.porcentaje==25){
      indice_cambiar=1
    }
  console.log(this.index)
  this.index=this.index.map((p,i)=>i==indice_cambiar?true:false)

  console.log(this.index)

    this.modo_edit=true
    this.activar_ventana()
    console.log(this.skill_edit)


  }

  ventana_elim_skill(band:any){
    this.activar_vent_elim=!this.activar_vent_elim
    if(this.activar_vent_elim){
      this.clase_vent_elim+=" activar"
      this.elim_skill_id=band
      console.log(this.elim_skill_id)
    }
    else{
      this.clase_vent_elim="reg";
      this.elim_skill_id=0

    }

  }

}
