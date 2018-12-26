import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOneDynamicButtonComponent } from './set-1-dynamic-button.component';

describe('DynamicButtonComponent', () => {
  let component: SetOneDynamicButtonComponent;
  let fixture: ComponentFixture<SetOneDynamicButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetOneDynamicButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetOneDynamicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
