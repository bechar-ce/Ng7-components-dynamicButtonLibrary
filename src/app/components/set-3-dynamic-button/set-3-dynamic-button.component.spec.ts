import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetThreeDynamicButtonComponent } from './set-3-dynamic-button.component';

describe('DynamicButtonComponent', () => {
  let component: SetThreeDynamicButtonComponent;
  let fixture: ComponentFixture<SetThreeDynamicButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetThreeDynamicButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetThreeDynamicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
