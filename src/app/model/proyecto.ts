export class Proyecto {
  id?: number;
  nombre: string;
  descripcion: string;
  url:string

  constructor(nombre: string, descripcion: string,url:string){
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.url=url
  }
}
