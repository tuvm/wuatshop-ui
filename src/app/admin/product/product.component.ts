import { Component, Input } from '@angular/core';
import { ProductService } from './product.service';
import { AbstractComponent } from 'src/app/common/component/abstract.component';

@Component({
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss']
})
export class ProductComponent extends AbstractComponent {
  @Input() product: any;

  constructor (
    protected productService: ProductService
  ) {
    super();
  }

  public productList = [];

  ngOnInit() {
    this.getProductList();
  }

  public getProductList() {
    this.productService.getProductList().subscribe(res => {
      console.log(res);
      this.productList = res;
    });
  }
}
