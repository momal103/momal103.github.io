import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviCardComponent } from './suivi-card.component';

describe('SuiviCardComponent', () => {
  let component: SuiviCardComponent;
  let fixture: ComponentFixture<SuiviCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuiviCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuiviCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
