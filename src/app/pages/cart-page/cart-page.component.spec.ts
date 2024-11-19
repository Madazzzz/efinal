import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  increaseQuantity(item: any) {
    item.quantity += 1;
    this.cartService.updateCartItem(item); // Update the cart with the new quantity
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.cartService.updateCartItem(item); // Update the cart with the new quantity
    }
  }

  deleteItem(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems(); // Refresh the cart items after deletion
  }
}
