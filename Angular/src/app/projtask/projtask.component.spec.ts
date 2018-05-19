import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjtaskComponent } from './projtask.component';

describe('ProjtaskComponent', () => {
  let component: ProjtaskComponent;
  let fixture: ComponentFixture<ProjtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
