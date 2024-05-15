import { Product } from './../services/api/model/product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input()
  product:Product={
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
  }


}
