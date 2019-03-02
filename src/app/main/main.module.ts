import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { ContactComponent } from 'src/app/main/contact/contact.component';
import { DynamicScriptLoaderService } from 'src/app/common/service/dynamic-script-loader.service';
import { SliderComponent } from './partials/slider/slider.component';
import { ProductCategoryComponent } from './partials/product-category/product-category.component';
import { ProductService } from './service/product.service';
import { CommonModule } from '../common/common.module';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'contact', component: ContactComponent }
]

@NgModule({
  declarations: [
    MainComponent,
    ContactComponent,
    SliderComponent,
    ProductCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    DynamicScriptLoaderService,
    ProductService
  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
