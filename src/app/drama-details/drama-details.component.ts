import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

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

@Component({
  selector: 'app-drama-details',
  templateUrl: './drama-details.component.html',
  styleUrls: ['./drama-details.component.css']
})
export class DramaDetailsComponent implements OnInit {

  public drama$: Observable<Drama>; // Observable of type Drama
  public id: String; // will hold id passed through route (:id)

  constructor(
    public db: AngularFirestore, 
    public route: ActivatedRoute
  ) 
  {
    // set 'id' when page loads from route params.id
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void 
  {
    // query Firestore using 'id' when page loads
    this.drama$ = this.db
      .doc<Drama>('dramas/' + this.id)
      .valueChanges();
  }

  

}
