import { Product } from './../services/api/model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {


  constructor(private activedRoute: ActivatedRoute, private service: ProductService){

  }
   products:Product[]=[]

  ngOnInit(): void {

    this.service.getAllProductWithLimit().subscribe({
      next:(resultado)=>{
        this.products=resultado;

      }
    })

   // console.log(this.activedRoute);


  }


}
