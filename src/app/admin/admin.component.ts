import { Component } from '@angular/core';

@Component({
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.scss']
})
export class AdminComponent {
  product = {
    name: 'example',
    badge: 'hot',
    brand: 'adidas',
    category: 'men',
    image: [
      {
        src: 'example.com',
        name: 'image-name'
      }
    ]
  }
}
