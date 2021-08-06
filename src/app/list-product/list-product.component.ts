import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { TypeProduct } from '../product/product';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: TypeProduct[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct(){
  this.productService.getProducts().subscribe(data => {
    this.products = data;
  })
  }

}
