import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addTest(permissions){
    if (permissions === "profesor" ) {
      return true;
    }
    else {
      return false;
    }
  }
}

