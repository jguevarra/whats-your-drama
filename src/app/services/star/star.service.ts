import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, from, of } from 'rxjs';

export interface Star {
  userId: string;
  dramaId: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(public db: AngularFirestore) { }

  // Star reviews that belong to a user
  getUserStars(userId) {
    const starsRef = this.db.collection('stars', ref => ref.where('userId', '==', userId) );
    return starsRef.valueChanges();
  }

  // Get all stars that belong to a Drama
  getDramaStars(dramaId) {
    const starsRef = this.db.collection('stars', ref => ref.where('dramaId', '==', dramaId) );
    return starsRef.valueChanges();
  }

  // Create or update star
  setStar(userId, dramaId, rating) {
    // Star document data
    const star: Star = { 
      userId: userId, 
      dramaId: dramaId, 
      rating: rating 
    };

    // Custom doc ID for relationship
    const starPath = `stars/${star.userId}_${star.dramaId}`;

    // Set the data, return the promise
    return this.db.doc(starPath).set(star, { merge: true });
  }
}
