import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { ControlComponent } from 'src/app/main/control/control.component';
import { DynamicScriptLoaderService } from 'src/app/common/service/dynamic-script-loader.service';
import { SliderComponent } from './partials/slider/slider.component';
import { ProductCategoryComponent } from './partials/product-category/product-category.component';
import { ProductService } from './service/product.service';
import { CommonModule } from '../common/common.module';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { DetailComponent } from './detail/detail.component';
import { ChartComponent } from './chart/chart.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'control', component: ControlComponent },
    { path: 'detail', component: DetailComponent },
    { path: 'chart', component: ChartComponent },
    { path: 'manage', component: ManageComponent }
]

@NgModule({
  declarations: [
    MainComponent,
    ControlComponent,
    DetailComponent,
    ChartComponent,
    ManageComponent,
    SliderComponent,
    SidebarComponent,
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
