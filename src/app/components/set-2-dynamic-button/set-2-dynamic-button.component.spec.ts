import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTwoDynamicButtonComponent } from './set-2-dynamic-button.component';

describe('DynamicButtonComponent', () => {
  let component: SetTwoDynamicButtonComponent;
  let fixture: ComponentFixture<SetTwoDynamicButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetTwoDynamicButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTwoDynamicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
