import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchMenuComponent } from './launch-menu.component';

describe('LaunchMenuComponent', () => {
  let component: LaunchMenuComponent;
  let fixture: ComponentFixture<LaunchMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
