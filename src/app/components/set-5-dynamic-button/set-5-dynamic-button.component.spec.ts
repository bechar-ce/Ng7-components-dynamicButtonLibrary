import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFiveDynamicButtonComponent } from './set-5-dynamic-button.component';

describe('DynamicButtonComponent', () => {
  let component: SetFiveDynamicButtonComponent;
  let fixture: ComponentFixture<SetFiveDynamicButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetFiveDynamicButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetFiveDynamicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
