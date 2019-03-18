import { NgModule } from '@angular/core';

import { CommonModule as AngularCommonModule } from '@angular/common';
import { AbstractService } from './service/abstract.service';
import { ProductComponent } from './component/admin/product/product.component';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    AngularCommonModule
  ],
  providers: [
    AbstractService
  ],
  exports: [
    AngularCommonModule,
    ProductComponent
  ],
  bootstrap: []
})
export class CommonModule { }
