import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetraiComponent } from './betrai.component';

describe('BetraiComponent', () => {
  let component: BetraiComponent;
  let fixture: ComponentFixture<BetraiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetraiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
