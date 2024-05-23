import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newcomp4Component } from './newcomp4.component';

describe('Newcomp4Component', () => {
  let component: Newcomp4Component;
  let fixture: ComponentFixture<Newcomp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newcomp4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newcomp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
