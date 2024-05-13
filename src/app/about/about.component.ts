import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent  implements OnInit{
  constructor(private activedRoute: ActivatedRoute, private service: ProductService){

  }
  param:any;
  queryParam:any;

  ngOnInit(): void {
    console.log(this.activedRoute);
    this.param=this.activedRoute.snapshot.params['username']
this.queryParam=this.activedRoute.snapshot.queryParams['course']
this.service.getAllProductWithLimit().subscribe(
  {next: (data)=>{
    console.log("Ola Data", data);

  }}
)


  }

}
