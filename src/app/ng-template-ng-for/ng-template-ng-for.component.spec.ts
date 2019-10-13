import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateNgForComponent } from './ng-template-ng-for.component';

describe('NgTemplateNgForComponent', () => {
  let component: NgTemplateNgForComponent;
  let fixture: ComponentFixture<NgTemplateNgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplateNgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
