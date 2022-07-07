import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieCredit, MoviesImages, MovieVDO, MovieVDOs } from '../models/movie';
import { Genres } from '../models/genres';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl : string = 'https://api.themoviedb.org/3'
  apiKey : string = '3415cdae683353d89adf841986d217f9'
  constructor(private http: HttpClient) {}

  getMovies(type : string = '') {
    return this.http.get(
      `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`
    );
  }
  getMoviesDetail(id : number){
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`)
  }
  getMoviesVideo(id:number){
    return this.http.get<MovieVDOs>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
  }
  getMoviesImage(id:number){
    return this.http.get<MoviesImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`)
  }
  getMoviesCredit(id:number){
    return this.http.get<MovieCredit>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`)
  }
  getMoviesGen(){
    return this.http.get<Genres>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
  }
}
