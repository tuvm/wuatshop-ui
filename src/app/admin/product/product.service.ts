import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AbstractService } from 'src/app/common/service/abstract.service';

@Injectable()
export class ProductService extends AbstractService {

  public getProductList() {
    return this.get('private/product');
  }

  public getProductDetail(id) {
    return this.get('private/product/' + id);
  }

  public getBadgeList() {
    return this.get('private/badge');
  }

  public getGenderList() {
    return this.get('private/gender');
  }

  public getBrandList() {
    return this.get('private/brand');
  }
}