import { NgModule } from '@angular/core';

import { CommonModule as AngularCommonModule } from '@angular/common';
import { AbstractService } from './service/abstract.service';

@NgModule({
  declarations: [
  ],
  imports: [
    AngularCommonModule
  ],
  providers: [
    AbstractService
  ],
  exports: [
    AngularCommonModule
  ],
  bootstrap: []
})
export class CommonModule { }
