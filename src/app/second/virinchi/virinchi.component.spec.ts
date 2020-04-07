import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirinchiComponent } from './virinchi.component';

describe('VirinchiComponent', () => {
  let component: VirinchiComponent;
  let fixture: ComponentFixture<VirinchiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirinchiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirinchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
