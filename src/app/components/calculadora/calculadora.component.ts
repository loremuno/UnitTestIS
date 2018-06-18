import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  comprobarNivelJugador(jugador) {
    if (jugador.nivel === "avanzado" || jugador.rol === "tutor") {
      return true;
    }
    else {
      return false;
    }
  }
  comprobarRolUsuario(usuario){
    if(usuario.rol == "tutor"){
      return true;
    }else{
      return false;
    }
  
  }
  comprobarNivelJugadorAvanzado(jugador) {
    if (jugador.nivel === "avanzado") {
      return true;
    }
    else {
      return false;
    }
  }
}
