import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from '../product.service';
import { TypeProduct } from '../product/product';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: TypeProduct = {
    id: 0,
    name: '',
    price: 0,
    status: false,
    img: ''
  }
  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }
  getInfo(){
    this.activatedRoute.params.subscribe(params => {
          this.productService.get(params.id).subscribe(data => {
            this.product = data;
          })
    })
  }
  onEditProduct(){
    this.productService.updateProducts(this.product).subscribe(data =>{
        this.router.navigateByUrl('/product');
    })
  }
}
