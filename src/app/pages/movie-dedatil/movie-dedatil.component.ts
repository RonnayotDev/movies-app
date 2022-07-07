import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieCredit, MoviesImages, MovieVDO } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-dedatil',
  templateUrl: './movie-dedatil.component.html',
  styleUrls: ['./movie-dedatil.component.css']
})
export class MovieDedatilComponent implements OnInit {

  moviesDetail : Movie | null = null
  moviesVideos : MovieVDO [] = [] ;
  moviesImage : MoviesImages | null = null;
  moviesCredits : MovieCredit | null = null;

  constructor(private actiVateRoute:ActivatedRoute ,
    private moviesService : MoviesService 
    ) { }

  ngOnInit(): void {
    this.actiVateRoute.params.subscribe((response : any) => {
      this.getMoviesDetail(response.id)
      this.getMoviesVideos(response.id)
      this.getmoviesImage(response.id)
      this.getMoviesCredit(response.id)
    })
  }
  getMoviesDetail(id : number){
    this.moviesService.getMoviesDetail(id).subscribe((response : any) => {
      this.moviesDetail = response
    })
  }
  getMoviesVideos(id:number){
    this.moviesService.getMoviesVideo(id).subscribe((response : any) => {
      this.moviesVideos = response.results
      console.log("VDO"+response.results)
    })
  }
  getmoviesImage(id:number){
    this.moviesService.getMoviesImage(id).subscribe((response : any) => {
      this.moviesImage = response
    })
  }
  getMoviesCredit(id:number){
    this.moviesService.getMoviesCredit(id).subscribe((response:any) => {
      this.moviesCredits = response
      console.log("credit"+response)
    })
  }

}
