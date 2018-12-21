import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobeComponent } from './cobe.component';

describe('CobeComponent', () => {
  let component: CobeComponent;
  let fixture: ComponentFixture<CobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
