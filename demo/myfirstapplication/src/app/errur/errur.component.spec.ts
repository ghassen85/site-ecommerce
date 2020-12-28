import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrurComponent } from './errur.component';

describe('ErrurComponent', () => {
  let component: ErrurComponent;
  let fixture: ComponentFixture<ErrurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
