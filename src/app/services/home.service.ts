import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}
  api = 'https://fakestoreapi.com/products';

  async getAllProducts(limit: number) {
    console.log(limit);
    try {
      const res = await axios.get(this.api);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
}
