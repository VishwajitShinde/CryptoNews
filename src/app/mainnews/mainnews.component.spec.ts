import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainnewsComponent } from './mainnews.component';

describe('MainnewsComponent', () => {
  let component: MainnewsComponent;
  let fixture: ComponentFixture<MainnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
