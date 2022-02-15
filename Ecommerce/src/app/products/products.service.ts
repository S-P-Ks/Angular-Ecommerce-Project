import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getHeadPhones() {
    return this.http.get('http://localhost:3000/Headphones');
  }

  getSmartPhones() {
    return this.http.get(' http://localhost:3000/Smartphones');
  }

  getLaptops() {
    return this.http.get('http://localhost:3000/laptops');
  }
}
