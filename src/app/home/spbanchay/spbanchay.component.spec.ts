import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpbanchayComponent } from './spbanchay.component';

describe('SpbanchayComponent', () => {
  let component: SpbanchayComponent;
  let fixture: ComponentFixture<SpbanchayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpbanchayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpbanchayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
