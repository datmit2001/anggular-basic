import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { TypeProduct } from '../product/product';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  products: TypeProduct[]
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

}
