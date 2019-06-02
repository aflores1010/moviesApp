 export interface ResponseMovieInterface {
    page: number;
    total_results: number;
    total_pages: number;
    results: MovieInterface[];
  }
  
  export interface MovieInterface {
    vote_count: number;
    id: number;
    video: boolean;
    vote_average: number;
    title: string;
    popularity: number;
    poster_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    backdrop_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
  }

  // detalles de pelicula
  export interface MovieDetail {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: any;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Productioncompany[];
    production_countries: Productioncountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Spokenlanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
  export interface Spokenlanguage {
    iso_639_1: string;
    name: string;
  }
  
  export interface Productioncountry {
    iso_3166_1: string;
    name: string;
  }
  
  export interface Productioncompany {
    id: number;
    logo_path?: string;
    name: string;
    origin_country: string;
  }
  
  export interface Genre {
    id: number;
    name: string;
  }
