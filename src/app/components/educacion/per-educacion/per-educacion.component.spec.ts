import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerEducacionComponent } from './per-educacion.component';

describe('PerEducacionComponent', () => {
  let component: PerEducacionComponent;
  let fixture: ComponentFixture<PerEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
