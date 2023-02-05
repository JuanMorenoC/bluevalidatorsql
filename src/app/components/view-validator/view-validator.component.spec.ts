import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewValidatorComponent } from './view-validator.component';

describe('ViewValidatorComponent', () => {
  let component: ViewValidatorComponent;
  let fixture: ComponentFixture<ViewValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
