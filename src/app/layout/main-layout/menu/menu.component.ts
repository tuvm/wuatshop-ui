import { Component } from '@angular/core';
import { AbstractComponent } from 'src/app/common/abstract.component';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})
export class MenuComponent extends AbstractComponent {
  title = 'wuat-shop';
}
