import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedTextComponent } from './red-text.component';

describe('RedTextComponent', () => {
  let component: RedTextComponent;
  let fixture: ComponentFixture<RedTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
