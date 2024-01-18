import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css'
})
export class AccordionItemComponent {
  @Input() num = '';
  @Input() header = '';
}
