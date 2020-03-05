import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BegaiComponent } from './begai.component';

describe('BegaiComponent', () => {
  let component: BegaiComponent;
  let fixture: ComponentFixture<BegaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BegaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BegaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
