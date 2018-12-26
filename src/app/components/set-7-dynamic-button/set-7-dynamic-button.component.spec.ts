import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSevenDynamicButtonComponent } from './set-7-dynamic-button.component';

describe('DynamicButtonComponent', () => {
  let component: SetSevenDynamicButtonComponent;
  let fixture: ComponentFixture<SetSevenDynamicButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetSevenDynamicButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSevenDynamicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
