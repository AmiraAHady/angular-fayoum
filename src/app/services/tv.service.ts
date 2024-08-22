import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  apiKey = '037f872ea1c47d9d478cde261bcb9c2e';
  constructor(private http: HttpClient) {}

  getAllTv(): Observable<any> {
    return this.http.get<any>(`
https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}`);
  }
}
