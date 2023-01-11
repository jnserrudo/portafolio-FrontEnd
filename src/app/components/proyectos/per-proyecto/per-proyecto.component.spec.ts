import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerProyectoComponent } from './per-proyecto.component';

describe('PerProyectoComponent', () => {
  let component: PerProyectoComponent;
  let fixture: ComponentFixture<PerProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
