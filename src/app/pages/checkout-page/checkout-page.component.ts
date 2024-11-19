import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent {
  checkoutForm = {
    name: '',
    address: '',
    cardNumber: '',
  };
  cartTotal: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Calculate the cart total on init
    this.cartTotal = this.cartService.getCartTotalPrice();
  }

  submitOrder() {
    console.log('Order submitted:', this.checkoutForm);
    // Process order logic here
  }
}
