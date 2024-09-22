import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilLibComponent } from './util-lib.component';

describe('UtilLibComponent', () => {
  let component: UtilLibComponent;
  let fixture: ComponentFixture<UtilLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
