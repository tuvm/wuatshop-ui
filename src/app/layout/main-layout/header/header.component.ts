import { Component } from '@angular/core';
import { AbstractComponent } from 'src/app/common/abstract.component';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  title = 'wuat-shop';
}
