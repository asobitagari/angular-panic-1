import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaDetailComponent } from './mana-detail.component';

describe('ManaDetailComponent', () => {
  let component: ManaDetailComponent;
  let fixture: ComponentFixture<ManaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
