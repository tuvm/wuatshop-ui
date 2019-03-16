import { Component } from '@angular/core';
import { AbstractComponent } from 'src/app/common/component/abstract.component';

@Component({
  selector: 'main-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})
export class MenuComponent extends AbstractComponent {
  title = 'wuat-shop';
}
