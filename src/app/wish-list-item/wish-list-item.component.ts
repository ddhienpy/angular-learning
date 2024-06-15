import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { EventService } from '../../shared/services/EventService';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wish!: WishItem;

  constructor(private event: EventService) {

  }

  get cssClasses() {
    return this.wish.isComplete ? ['strikeout', 'text-muted'] : []
  }

  toogleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete
  }

  removeWish() {
    this.event.emit('removeWish', this.wish)
  }
}
