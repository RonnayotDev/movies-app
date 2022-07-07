import { Component, OnInit } from '@angular/core';
import { Genres } from 'src/app/models/genres';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-gesres',
  templateUrl: './gesres.component.html',
  styleUrls: ['./gesres.component.css'],
})
export class GesresComponent implements OnInit {
  moviesGen: Genres | null =null;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMoviesGen().subscribe((response: any) => {
      this.moviesGen = response;
      console.log('genres ' + response);
    });
  }
}
