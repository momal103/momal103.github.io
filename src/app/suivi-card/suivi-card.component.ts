import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-suivi-card',
  templateUrl: './suivi-card.component.html',
  styleUrl: './suivi-card.component.css'
})
export class SuiviCardComponent {
  @Input() imgName = '';
  @Input() heading = '';
}
