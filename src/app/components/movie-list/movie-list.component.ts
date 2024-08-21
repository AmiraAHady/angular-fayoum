import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { RouterLink } from '@angular/router';

@Component({
  // Component Directives
  selector: 'app-movie-list',
  standalone: true,
  imports: [FormsModule, DatePipe, UpperCasePipe,RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  allMovies!: any

  constructor(private movieServ: MovieService) {}
  ngOnInit(): void {
    this.allMovies = this.movieServ.getAllMovies();
  }
}
