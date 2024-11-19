import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service'; // Import CartService
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  product: any;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService // Inject CartService
  ) {}

  ngOnInit(): void {
    this.fetchProduct();
  }

  async fetchProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.product = await this.productService.getProducts(id);
      this.loading = false;
    }
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    alert(`${this.product.title} has been added to your cart!`); // Optional alert
  }
}
