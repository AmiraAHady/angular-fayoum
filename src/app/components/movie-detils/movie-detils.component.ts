import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-detils',
  standalone: true,
  imports: [NgClass,NgStyle],
  templateUrl: './movie-detils.component.html',
  styleUrl: './movie-detils.component.css',
})
export class MovieDetilsComponent {
  movieData = {
    adult: false,
    backdrop_path: '/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg',
    belongs_to_collection: {
      id: 1022790,
      name: 'Inside Out Collection',
      poster_path: '/kvJqs0vm29U0xJa373wlzHb3FRh.jpg',
      backdrop_path: '/7U2m2dMSIfHx2gWXKq78Xj1weuH.jpg',
    },
    budget: 200000000,
    genres: [
      {
        id: 16,
        name: 'Animation',
      },
      {
        id: 10751,
        name: 'Family',
      },
      {
        id: 12,
        name: 'Adventure',
      },
      {
        id: 35,
        name: 'Comedy',
      },
    ],
    homepage: 'https://movies.disney.com/inside-out-2',
    id: 1022789,
    imdb_id: 'tt22022452',
    origin_country: ['US'],
    original_language: 'en',
    original_title: 'Inside Out 2',
    overview:
      "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
    popularity: 3288.093,
    poster_path: '/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
    production_companies: [
      {
        id: 2,
        logo_path: '/wdrCwmRnLFJhEoH8GSfymY85KHT.png',
        name: 'Walt Disney Pictures',
        origin_country: 'US',
      },
      {
        id: 3,
        logo_path: '/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png',
        name: 'Pixar',
        origin_country: 'US',
      },
    ],
    production_countries: [
      {
        iso_3166_1: 'US',
        name: 'United States of America',
      },
    ],
    release_date: '2024-06-11',
    revenue: 1625983694,
    runtime: 97,
    spoken_languages: [
      {
        english_name: 'English',
        iso_639_1: 'en',
        name: 'English',
      },
    ],
    status: 'Released',
    tagline: 'Make room for new emotions.',
    title: 'Inside Out 2',
    video: false,
    vote_average: 6.626,
    vote_count: 2504,
  };
}
