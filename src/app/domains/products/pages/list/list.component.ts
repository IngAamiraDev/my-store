import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './../../components/product/product.component';
import { HeaderComponent } from './../../../shared/components/header/header.component';
import { Product } from './../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[]  = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=24',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=25',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 4',
        price: 100,
        image: 'https://picsum.photos/640/640?r=42',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 5',
        price: 100,
        image: 'https://picsum.photos/640/640?r=43',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 6',
        price: 100,
        image: 'https://picsum.photos/640/640?r=44',
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  addToCart(product: Product) {
    this.cart.update(prevState => [...prevState, product]);
  }

}
