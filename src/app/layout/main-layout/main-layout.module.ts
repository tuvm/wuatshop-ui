import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { ContactComponent } from 'src/app/main/contact/contact.component';
import { SliderComponent } from './slider/slider.component';
import { DynamicScriptLoaderService } from 'src/app/common/dynamic-script-loader.service';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'contact', component: ContactComponent }
]

@NgModule({
  declarations: [
    MainComponent,
    ContactComponent,
    SliderComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [DynamicScriptLoaderService],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainLayoutModule { }
