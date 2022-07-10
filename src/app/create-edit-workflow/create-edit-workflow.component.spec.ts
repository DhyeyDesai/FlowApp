import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditWorkflowComponent } from './create-edit-workflow.component';

describe('CreateEditWorkflowComponent', () => {
  let component: CreateEditWorkflowComponent;
  let fixture: ComponentFixture<CreateEditWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditWorkflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
