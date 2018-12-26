import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFourDynamicButtonComponent } from './set-4-dynamic-button.component';

describe('DynamicButtonComponent', () => {
  let component: SetFourDynamicButtonComponent;
  let fixture: ComponentFixture<SetFourDynamicButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetFourDynamicButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetFourDynamicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
