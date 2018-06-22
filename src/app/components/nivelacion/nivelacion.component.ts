import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nivelacion',
  templateUrl: './nivelacion.component.html',
  styleUrls: ['./nivelacion.component.css']
})
export class NivelacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  verificarPuntuacion(jugador) {
    if (jugador.puntos >= 0) {
      return true;
    } else {
      return false;
    }
  }
  subirNivel(jugador) {
    let nivelActual = jugador.nivel;
    if (jugador.puntos <= 50) {
      jugador.nivel = "aprendiz";
    } else if (jugador.puntos <= 75 && jugador.puntos > 50) {
      jugador.nivel = "medio";
    } else if (jugador.puntos >= 90) {
      jugador.nivel = "avanzado";
    }
    if (jugador.nivel != nivelActual) {
      return true;
    }
    else {
      return false;
    }
  }

}
