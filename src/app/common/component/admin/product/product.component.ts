import { Component, Input } from '@angular/core';

@Component({
  selector: 'admin-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss']
})
export class ProductComponent {

  @Input() product: any;
}
