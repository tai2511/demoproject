import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyeuthichComponent } from './spyeuthich.component';

describe('SpyeuthichComponent', () => {
  let component: SpyeuthichComponent;
  let fixture: ComponentFixture<SpyeuthichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpyeuthichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyeuthichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
