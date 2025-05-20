import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarMovimientoComponent } from './registar-movimiento.component';

describe('RegistarMovimientoComponent', () => {
  let component: RegistarMovimientoComponent;
  let fixture: ComponentFixture<RegistarMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistarMovimientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistarMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
