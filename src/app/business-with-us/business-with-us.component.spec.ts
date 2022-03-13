import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessWithUsComponent } from './business-with-us.component';

describe('BusinessWithUsComponent', () => {
  let component: BusinessWithUsComponent;
  let fixture: ComponentFixture<BusinessWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessWithUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
