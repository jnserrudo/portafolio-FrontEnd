import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerSkillComponent } from './per-skill.component';

describe('PerSkillComponent', () => {
  let component: PerSkillComponent;
  let fixture: ComponentFixture<PerSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
