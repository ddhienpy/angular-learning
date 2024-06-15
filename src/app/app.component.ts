import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { EventService } from '../shared/services/EventService';
import { WishService } from '../shared/services/wish.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    NgIf,
    FormsModule, 
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-wishlist';
  items: WishItem[] = [];

  constructor(private event: EventService, private wishService: WishService) {
    this.event.listen('removeWish', (wish: any) => {
      console.log(wish)
      this.items.splice(this.items.indexOf(wish), 1)
    })
  }

  ngOnInit(): void {
    this.wishService.getWishs().subscribe((data: any) => {
      console.log("data", data)
      this.items = data
    })
  }

  filter: any = () => {}
}
