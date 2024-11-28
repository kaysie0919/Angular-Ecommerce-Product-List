import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [CommonModule], 
  providers: [ProductService], 
})
export class ProductComponent implements OnInit {
  products: any[] = []; 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    
    this.products = this.productService.getProducts();
  }
}
