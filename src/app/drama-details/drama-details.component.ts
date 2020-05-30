import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from '../services/auth/auth.service';

// listen to changes in the router
import { ActivatedRoute } from '@angular/router';

export interface Drama {
  actors: [];
  desc: string;
  directors: [];
  finished: string;
  genres: [];
  imgURL: string;
  title: string;
  imgPoster: string;
 }

export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  myCustomData?: string;
}

export interface Star {
  userId: string;
  dramaId: string;
  rating: number;
}

@Component({
  selector: 'app-drama-details',
  templateUrl: './drama-details.component.html',
  styleUrls: ['./drama-details.component.css']
})
export class DramaDetailsComponent implements OnInit {

  public drama$: Observable<Drama>; // Observable of type Drama
  public user$: Observable<User>;

  userDoc: AngularFirestoreDocument<User>;
  dramaDoc: AngularFirestoreDocument<Drama>;

  public drama_Id: string; // will hold id passed through route (:id)
  public user_Id: string;

  constructor(
    public db: AngularFirestore, 
    public route: ActivatedRoute,
    public auth: AuthService
  ) 
  {
    // set 'drama_id' when page loads from route params.id
    this.route.params.subscribe(params => this.drama_Id = params.id);

    // set 'user_id' when page loads from route params.id
    this.auth.user$.subscribe(params => this.user_Id = params.uid);
  }

  ngOnInit(): void 
  {
    // query Firestore using 'id' when page loads
    this.drama$ = this.db
      .doc<Drama>('dramas/' + this.drama_Id)
      .valueChanges();

    this.user$ = this.db
      .doc<User>('users/' + this.user_Id)
      .valueChanges();
  }

  get getDramaId() {
    return this.db
      .doc<Drama>('dramas/' + this.drama_Id).ref.id;
  }

  get getUserId() {
    return  this.db
      .doc<User>('users/' + this.user_Id).ref.id;
  }

}
