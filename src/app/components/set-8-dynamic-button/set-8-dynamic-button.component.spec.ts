import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEightDynamicButtonComponent } from './set-8-dynamic-button.component';

describe('DynamicButtonComponent', () => {
  let component: SetEightDynamicButtonComponent;
  let fixture: ComponentFixture<SetEightDynamicButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetEightDynamicButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetEightDynamicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
