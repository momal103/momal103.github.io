import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rubrique',
  templateUrl: './rubrique.component.html',
  styleUrl: './rubrique.component.css'
})
export class RubriqueComponent {
  @Input() h3 = '';
  @Input() h2 = '';
}
