import { Component, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { AbstractComponent } from 'src/app/common/component/abstract.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'product-edit.component.html',
  styleUrls: ['product-edit.component.scss']
})
export class ProductEditComponent extends AbstractComponent {

  constructor (
    protected productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    super();
  }

  public product = {
    id: "",
    name: "",
    image: "",
    gender: "",
    brand: "",
    badge: "",
    detailImages: ""
  };

  public badgeList = [];
  public genderList = [];
  public brandList = [];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.product.id = params.id;
      console.log(params);
      this.getProductDetail(this.product.id);
    });

    this.getBadgeList();
    this.getBrandList();
    this.getGenderList();
  }

  public getProductDetail(id) {
    this.productService.getProductDetail(id).subscribe(res => {
      this.product = res;
    });
  }

  public getBadgeList() {
    this.productService.getBadgeList().subscribe(res => {
      console.log(res);
      this.badgeList = res;
    });
  }

  public getGenderList() {
    this.productService.getGenderList().subscribe(res => {
      console.log(res);
      this.genderList = res;
    });
  }

  public getBrandList() {
    this.productService.getBrandList().subscribe(res => {
      console.log(res);
      this.brandList = res;
    });
  }
}
