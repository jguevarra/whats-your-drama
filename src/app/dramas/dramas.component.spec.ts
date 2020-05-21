import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramasComponent } from './dramas.component';

describe('DramasComponent', () => {
  let component: DramasComponent;
  let fixture: ComponentFixture<DramasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
