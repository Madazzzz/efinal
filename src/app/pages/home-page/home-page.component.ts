import { Component, OnInit } from '@angular/core';
import { ProductcardComponentComponent } from '../../components/productcard-component/productcard-component.component';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';

interface Iproduct {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductcardComponentComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  products: Iproduct[] = [];
  filteredProducts: Iproduct[] = [];
  selectedCategory: string = '';

  constructor(private homeservice: HomeService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts() {
    const res = await this.homeservice.getAllProducts(6);
    this.products = res;

    this.filteredProducts = this.products;
  }

  filterProducts(category: string) {
    this.selectedCategory = category;

    if (category) {
      this.filteredProducts = this.products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    } else {
      this.filteredProducts = this.products;
    }
  }
}
