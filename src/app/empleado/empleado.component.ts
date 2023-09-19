import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  Nombre: string = "Juan";
  Apellido: string = "Diaz";
  Edad: number = 18;
  //Empresa: string="Pildoras Informaticas"

  /*getEdad(){
    return this.Edad;
  }*/

  habilitacionCuadro=false;
  usuRegistrado=false;
  textoDeRegistro="No hay nadie registrado"

  getRegistroUsuario(){
    this.usuRegistrado=true;
  }

  setUsuarioRegistrado(event:Event){
  //  alert("El Usuario se acaba de registrar")
  //this.textoDeRegistro="El usuario se acaba de registrar";

 
  }

  constructor() {}

  ngOnInit(): void {
   
  }
}
