import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GosSigninComponent } from './gos-signin.component';

describe('GosSigninComponent', () => {
  let component: GosSigninComponent;
  let fixture: ComponentFixture<GosSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GosSigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GosSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
