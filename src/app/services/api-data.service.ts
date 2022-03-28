import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  configUrl = 'https://jsonplaceholder.typicode.com/posts/1/comments';

  constructor(private http: HttpClient) {}

  getTitle() {
    return this.http.get(this.configUrl);
  }
}
