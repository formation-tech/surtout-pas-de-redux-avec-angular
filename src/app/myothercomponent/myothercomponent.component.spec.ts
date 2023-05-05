import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyothercomponentComponent } from './myothercomponent.component';

describe('MyothercomponentComponent', () => {
  let component: MyothercomponentComponent;
  let fixture: ComponentFixture<MyothercomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyothercomponentComponent]
    });
    fixture = TestBed.createComponent(MyothercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
