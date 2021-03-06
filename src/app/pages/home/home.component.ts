import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie'
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularMovies:Movie[] = [];
  upcomingMovies:Movie[] = [];
  topRatedMovies:Movie[] = [];

  constructor(private moviesService : MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((response:any) => {
      this.popularMovies = response.results
      console.log(this.popularMovies)
    })
    this.moviesService.getMovies('upcoming').subscribe((response:any) => {
      this.upcomingMovies = response.results
      console.log(this.upcomingMovies)
    })
    this.moviesService.getMovies('top_rated').subscribe((response:any) => {
      this.topRatedMovies = response.results
      console.log(this.topRatedMovies)
    })
  }

}
