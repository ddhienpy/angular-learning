import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { EventService } from '../shared/services/EventService';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, NgFor, NgIf, FormsModule, 
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-wishlist';
  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Buy Something'),
  ]

  constructor(private event: EventService) {
    this.event.listen('removeWish', (wish: any) => {
      console.log(wish)
      this.items.splice(this.items.indexOf(wish), 1)
    })
  }

  filter: any = () => {}
}
