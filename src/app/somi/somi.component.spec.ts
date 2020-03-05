import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomiComponent } from './somi.component';

describe('SomiComponent', () => {
  let component: SomiComponent;
  let fixture: ComponentFixture<SomiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
