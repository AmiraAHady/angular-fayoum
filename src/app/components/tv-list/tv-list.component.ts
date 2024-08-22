import { Component, OnInit } from '@angular/core';
import { TvService } from '../../services/tv.service';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [],
  templateUrl: './tv-list.component.html',
  styleUrl: './tv-list.component.css'
})
export class TvListComponent implements OnInit {
  tvList!:any
   constructor(private tvService:TvService){}

   ngOnInit(): void {
       this.tvService.getAllTv().subscribe((data)=>{
        this.tvList=data.results
       })
   }
}
