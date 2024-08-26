import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent  implements OnInit{
  id!:number;
  product!:any
   constructor(private prodtServ:ProductService,private route:ActivatedRoute){}


   ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get('id'))
     this.prodtServ.getProductById(this.id).subscribe((data)=>{
      this.product=data;
      console.log(data);
      
     })
  }
}
