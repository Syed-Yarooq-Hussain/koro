import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  api = 'https://api.unsplash.com';
  client_id = '';
  constructor(
    private http: HttpClient,
  ) { }



  getImages(search: string, page: number) {
    return this.http.get(`${this.api}/search/photos?page=${page}&query=${search}&client_id=${environment.access_key}`, { headers: { 'Authorization': environment.access_key, 'Accept-Version': 'v1' } });
  }

}
