import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  divide(a,b){
    if (b === "0") {
      return true;
    }
    else{
      return false;
    }
  }
}
