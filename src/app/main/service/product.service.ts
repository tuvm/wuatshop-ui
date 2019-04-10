import { Injectable, Injector } from '@angular/core';
import { AbstractService } from 'src/app/common/service/abstract.service';

@Injectable()
export class ProductService extends AbstractService {

  public getByGender() {
      return this.get('public/products/gender/2');
  }

}