import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaDetailsComponent } from './drama-details.component';

describe('DramaDetailsComponent', () => {
  let component: DramaDetailsComponent;
  let fixture: ComponentFixture<DramaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
