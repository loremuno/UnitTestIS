import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Un jugador nivel aprendiz no puede ingresar a la calculadora', () => {
    const jugador = {
      nivel : "aprendiz",
    }
    expect(component.comprobarNivelJugador(jugador)).toBeFalsy();
  });
  it('Un usuario puede tener acceso si su rol es tutor', () => {
    const usuario = {
      rol : "tutor"
    }
    expect(component.comprobarRolUsuario(usuario)).toBeTruthy();
  });
  it('Un jugador nivel avanzado puede ingresar a la calculadora', () => {
    const jugador = {
      nivel : "avanzado",
    }
    expect(component.comprobarNivelJugadorAvanzado(jugador)).toBeTruthy();
  });
});
