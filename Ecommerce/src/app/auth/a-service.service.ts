import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

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

  loginUser(post: any): Observable<any> {
    console.log(post);
    return this.http.post<any>(`${this.url}/login`, post);
  }
}
