import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocButtonComponent } from './doc-button.component';

describe('DocButtonComponent', () => {
  let component: DocButtonComponent;
  let fixture: ComponentFixture<DocButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
