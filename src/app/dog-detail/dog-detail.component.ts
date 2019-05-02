import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../models/dog';
import { DogsService } from '../services/dogs.service';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'dog',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {
  @Input() dog: Dog;
  @Input() id: any;
  likes: number
  favorites: any;

  constructor(private dogService: DogsService, private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.likes = this.dogService.getLikes(this.dog.id) || 0;
    this.favorites = this.favoritesService.all() || 0;
  }

  /**
   * Add a like to this dog
   */
  addLike() {
    this.likes += 1;
    this.dogService.update({ id: this.dog.id, likes: this.likes });
  }

  /**
   * Add this dog to favorites list
   */
  addFav() {
    this.favoritesService.update(this.dog);
  }
}
