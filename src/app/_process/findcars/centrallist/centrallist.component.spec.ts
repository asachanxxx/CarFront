import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrallistComponent } from './centrallist.component';

describe('CentrallistComponent', () => {
  let component: CentrallistComponent;
  let fixture: ComponentFixture<CentrallistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrallistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
