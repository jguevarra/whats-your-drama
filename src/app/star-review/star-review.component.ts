import { Component, OnInit, Input } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { StarService } from '../services/star/star.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface Star {
  userId: string;
  dramaId: string;
  rating: number;
}

@Component({
  selector: 'app-star-review',
  templateUrl: './star-review.component.html',
  styleUrls: ['./star-review.component.css']
})
export class StarReviewComponent implements OnInit {

  // variables to be passed into the html
  @Input() userId: string;
  @Input() dramaId: string;

  stars: Observable<any[]>;
  avgRating: Observable<any>;

  constructor(public starService: StarService, public db: AngularFirestore) { }

  ngOnInit(): void {
    this.stars = this.starService.getDramaStars(this.dramaId);

    // standard to get the average of an array in plain javascript
    this.avgRating = this.stars.pipe(
      map(arr => {
        const ratings = arr.map(v => v.rating);
        return ratings.length ? ratings.reduce((total, val) => total + val) / arr.length : 'not reviewed';
      })
    )
  }


  starHandler(value) {
    // updates firestore
    this.starService.setStar(this.userId, this.dramaId, value);
  }

}
