import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramalistComponent } from './dramalist.component';

describe('DramalistComponent', () => {
  let component: DramalistComponent;
  let fixture: ComponentFixture<DramalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
