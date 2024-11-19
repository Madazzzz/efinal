import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart: any[] = [];

  addToCart(product: any) {
    const existingProductIndex = this.cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex > -1) {
      this.cart[existingProductIndex].quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  getCartItems() {
    return this.cart;
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter((item) => item.id !== productId);
  }

  updateCartItem(updatedItem: any) {
    const index = this.cart.findIndex(item => item.id === updatedItem.id);
    if (index > -1) {
      this.cart[index] = updatedItem;
    }
  }
  getCartTotalPrice() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

}
