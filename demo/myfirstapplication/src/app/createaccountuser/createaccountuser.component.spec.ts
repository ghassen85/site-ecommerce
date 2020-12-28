import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaccountuserComponent } from './createaccountuser.component';

describe('CreateaccountuserComponent', () => {
  let component: CreateaccountuserComponent;
  let fixture: ComponentFixture<CreateaccountuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateaccountuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaccountuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
