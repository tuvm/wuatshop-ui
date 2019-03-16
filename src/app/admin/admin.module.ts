import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { ContactComponent } from 'src/app/main/contact/contact.component';
import { DynamicScriptLoaderService } from 'src/app/common/service/dynamic-script-loader.service';
import { CommonModule } from '../common/common.module';
import { AdminComponent } from './admin.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'product', component: ProductComponent }
]

@NgModule({
  declarations: [
    AdminComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [],
  schemas: []
})
export class AdminModule { }
