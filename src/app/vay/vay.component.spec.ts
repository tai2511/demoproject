import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VayComponent } from './vay.component';

describe('VayComponent', () => {
  let component: VayComponent;
  let fixture: ComponentFixture<VayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
