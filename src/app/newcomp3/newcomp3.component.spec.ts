import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newcomp3Component } from './newcomp3.component';

describe('Newcomp3Component', () => {
  let component: Newcomp3Component;
  let fixture: ComponentFixture<Newcomp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newcomp3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newcomp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
