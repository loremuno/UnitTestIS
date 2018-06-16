import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisosComponent } from './permisos.component';

describe('PermisosComponent', () => {
  let component: PermisosComponent;
  let fixture: ComponentFixture<PermisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Un alumno no puede agregar ejercicios', () => {
    const permissions = "alumno";
    expect(component).toBeTruthy();
  });
});
