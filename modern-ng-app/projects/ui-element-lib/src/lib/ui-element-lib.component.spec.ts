import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiElementLibComponent } from './ui-element-lib.component';

describe('UiElementLibComponent', () => {
  let component: UiElementLibComponent;
  let fixture: ComponentFixture<UiElementLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiElementLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiElementLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
