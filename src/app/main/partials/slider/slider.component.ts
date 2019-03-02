import { Component, OnInit } from '@angular/core';
import { AbstractComponent } from 'src/app/common/component/abstract.component';
import { DynamicScriptLoaderService } from 'src/app/common/service/dynamic-script-loader.service';

@Component({
  selector: 'app-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.scss']
})
export class SliderComponent extends AbstractComponent implements OnInit {
  title = 'wuat-shop';
  constructor(
    private dynamicScriptLoader: DynamicScriptLoaderService
    
  ) {
    super();
  }

  ngOnInit() {
    this.loadScripts();
  }
  
  private loadScripts() {
    this.dynamicScriptLoader.load('sequence', 'sequence-theme.modern-slide-in').then(data => {
    }).catch(error => console.log(error));
  }
}
