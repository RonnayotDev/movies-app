export interface Movie 
    {
    adult:boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview:  string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    revenue:number,
    status:string
    }
    export interface MovieVDOs
    {
        results:MovieVDO
            
    }
    export interface MovieVDO {
        key : string
    }
    export interface MoviesImages
    {
           backdrops: {
            file_path:string
           }[]
      }
    export interface MovieCredit{
        cast:{
            name:string,
            profile_path:string
        }[]
    }
