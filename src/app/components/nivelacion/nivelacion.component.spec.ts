import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelacionComponent } from './nivelacion.component';

describe('NivelacionComponent', () => {
  let component: NivelacionComponent;
  let fixture: ComponentFixture<NivelacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Subir nivel de jugador', () => {
    const jugador = {
      puntos : 75
    }
    expect(component.subirNivel(jugador)).toBeTruthy();
  });
  it('No se debe permitir puntuacion negativa', () => {
    const jugador = {
      puntos : -1
    }
    expect(component.verificarPuntuacion(jugador)).toBeFalsy();
  });
});
