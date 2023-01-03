import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerExperienciaComponent } from './per-experiencia.component';

describe('PerExperienciaComponent', () => {
  let component: PerExperienciaComponent;
  let fixture: ComponentFixture<PerExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
