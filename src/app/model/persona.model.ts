export class persona{
  id?:number;
  nombre:string;
  apellido:string;
  img:string;
  url_linkedin:string;
  email:string;
  celular:number;

  constructor(nombre:string,apellido:string,img:string,url_linkedin:string,email:string,celular:number){

    this.nombre=nombre;
    this.apellido=apellido;
    this.img=img;
    this.url_linkedin=url_linkedin;
    this.email=email;
    this.celular=celular;
  }
  //debemos crear un servicio que utilice este modelo


}
