import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvDemandeComponent } from './rdv-demande.component';

describe('RdvDemandeComponent', () => {
  let component: RdvDemandeComponent;
  let fixture: ComponentFixture<RdvDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RdvDemandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RdvDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
