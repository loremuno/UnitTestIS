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
  verificarPuntuacion(jugador){
    if(jugador.puntos >= 0){
      return true;
    }else{
      return false;
    }
  }
  subirNivel(jugador){
    if(jugador.puntos < 50 ){
      jugador.nivel == "aprendiz";
      return jugador.nivel;
    }else if(jugador.puntos <100){
      jugador.nivel == "medio";
    }else{
      jugador.nivel =="avanzado";
    }
  }

}
