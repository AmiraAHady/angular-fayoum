import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  allProducts!:any[]
     constructor(private productService:ProductService){}

     ngOnInit(): void {
          this.productService.getProducts().subscribe((data)=>{
            console.log(data);
            this.allProducts=data
            
          })
     }
}
