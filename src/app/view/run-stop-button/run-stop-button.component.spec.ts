import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunStopButtonComponent } from './run-stop-button.component';

describe('RunStopButtonComponent', () => {
  let component: RunStopButtonComponent;
  let fixture: ComponentFixture<RunStopButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunStopButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunStopButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
