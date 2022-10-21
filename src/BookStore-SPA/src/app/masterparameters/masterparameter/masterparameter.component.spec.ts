import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterparameterComponent } from './masterparameter.component';

describe('MasterparameterComponent', () => {
  let component: MasterparameterComponent;
  let fixture: ComponentFixture<MasterparameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterparameterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterparameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
