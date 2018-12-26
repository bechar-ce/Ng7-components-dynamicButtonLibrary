import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSixDynamicButtonComponent } from './set-6-dynamic-button.component';

describe('DynamicButtonComponent', () => {
  let component: SetSixDynamicButtonComponent;
  let fixture: ComponentFixture<SetSixDynamicButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetSixDynamicButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSixDynamicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
