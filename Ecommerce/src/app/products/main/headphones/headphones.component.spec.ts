import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadphonesComponent } from './headphones.component';

describe('HeadphonesComponent', () => {
  let component: HeadphonesComponent;
  let fixture: ComponentFixture<HeadphonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadphonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
