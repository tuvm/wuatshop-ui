import { Component, OnInit } from '@angular/core';
import { AbstractComponent } from 'src/app/common/component/abstract.component';
import { ProductService } from '../../service/product.service';
import { DynamicScriptLoaderService } from 'src/app/common/service/dynamic-script-loader.service';

@Component({
  selector: 'app-product-category',
  templateUrl: 'product-category.component.html',
  styleUrls: ['product-category.component.scss']
})
export class ProductCategoryComponent extends AbstractComponent implements OnInit {
  title = 'wuat-shop';

  constructor (
    protected productService: ProductService,
    private dynamicScriptLoader: DynamicScriptLoaderService
  ) {
    super();
  }

  public productList = [];

  ngOnInit() {
    this.getByGender();
    this.loadScripts();
  }

  public getByGender() {
    this.productService.getByGender().subscribe(res => {
      console.log(res);
      this.productList = res;
    });
  }

  private loadScripts() {
    this.dynamicScriptLoader.load('jquery.simpleGallery', 'jquery.simpleLens').then(data => {
    }).catch(error => console.log(error));
  }
}
