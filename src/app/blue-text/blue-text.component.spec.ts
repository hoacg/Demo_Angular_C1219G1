import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueTextComponent } from './blue-text.component';

describe('BlueTextComponent', () => {
  let component: BlueTextComponent;
  let fixture: ComponentFixture<BlueTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
