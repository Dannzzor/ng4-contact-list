import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactComponent } from './new-contact.component';

describe('NewContactComponent', () => {
  let component: NewContactComponent;
  let fixture: ComponentFixture<NewContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
