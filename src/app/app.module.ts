import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module';
import { HttpClientModule } from '@angular/common/http';
import { AbstractService } from './common/service/abstract.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', component: AppComponent,
        loadChildren: './layout/main-layout/main-layout.module#MainLayoutModule'
      }
    ])
  ],
  providers: [AbstractService],
  bootstrap: [AppComponent]
})
export class AppModule { }
