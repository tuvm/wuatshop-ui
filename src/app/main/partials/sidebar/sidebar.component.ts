import { Component, OnInit, Input } from '@angular/core';
import { AbstractComponent } from 'src/app/common/component/abstract.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent extends AbstractComponent implements OnInit {
  title = 'wuat-shop';

  @Input() sidebarData = [];
  @Input() level = 1;

  constructor() {
    super();
  }

  ngOnInit() {
    console.log(this.sidebarData)
  }
}
