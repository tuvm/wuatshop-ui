import { Component, OnInit } from '@angular/core';
import { AbstractComponent } from '../common/component/abstract.component';
import { ProductService } from './service/product.service';

@Component({
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss']
})
export class MainComponent extends AbstractComponent implements OnInit {
  title = 'wuat-shop';

  public sidebarData = [];

  constructor(protected productService: ProductService) {
    super();
  }

  ngOnInit() {
    this.getSidebarData();
  }

  public getSidebarData() {
    this.productService.getdata().subscribe(res => {
      this.sidebarData = res;
      console.log(this.sidebarData);
    });
  }
}
