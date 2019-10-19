import { Component, OnInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { AbstractComponent } from 'src/app/common/component/abstract.component';
import { ProductService } from '../service/product.service';

declare const $: any;

@Component({
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss']
})
export class DetailComponent extends AbstractComponent implements OnInit, AfterContentChecked {
  title = 'wuat-shop';

  constructor (
    protected productService: ProductService
  ) {
    super();
  }

  public productList = [];

  ngOnInit() {
    this.getdata();
    
  }

  ngAfterContentChecked() {
    this.script();
  }

  public getdata() {
    this.productService.getdata().subscribe(res => {
      console.log(res);
      this.productList = res;
    });
  }

  public script() {
    $(function () {
      // 6 create an instance when the DOM is ready
      $("#jstree").jstree({
        // "checkbox" : {
        // "keep_selected_style" : false
        // },
        // "plugins" : [ "checkbox" ]
        "core": {
            "check_callback": true
        },
        "checkbox": {
          "keep_selected_style": false
        },
        "plugins": [ "types", "checkbox"],
        "types": {
            "default": {
                "icon": "fas fa-map-marker-alt"
            }
        }
      });
    });
  }
}


