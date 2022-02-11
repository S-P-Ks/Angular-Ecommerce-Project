import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mapTo, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../state/app.state';

@Injectable({
  providedIn: 'root',
})
export class AServiceService {
  constructor(private http: HttpClient) {}
  url = environment.SignUP;

  registerUser(post: any) {
    console.log(post);
    return this.http.post<any>(`${this.url}/register`, post);
  }

  loginUser(post: any) {
    console.log(post);
    return this.http.post<any>(`${this.url}/login`, post);
  }
}
