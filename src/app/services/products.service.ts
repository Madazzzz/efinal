import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  api = 'https://fakestoreapi.com/products';

  constructor() {}

  async getProducts(id: string) {
    try {
      const res = await axios.get(`${this.api}/${id}`);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }
}
