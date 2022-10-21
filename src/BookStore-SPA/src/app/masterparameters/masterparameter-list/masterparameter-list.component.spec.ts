import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterparameterListComponent } from './masterparameter-list.component';

describe('MasterparameterListComponent', () => {
  let component: MasterparameterListComponent;
  let fixture: ComponentFixture<MasterparameterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterparameterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterparameterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
