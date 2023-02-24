import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name: string = "";
  price: number = 0;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(){
    this.productService.addProduct({name: this.name, price: this.price}).subscribe(res => {
      this.router.navigate(['/products']);
    },
    err => prompt(err.message))
  }
}
