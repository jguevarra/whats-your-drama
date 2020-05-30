import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { EMPTY, Observable, of, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

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
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public items: Observable<any[]>;

  constructor(
    public auth: AuthService,
    public db: AngularFirestore
  ) 
  {
    this.items = this.db.collection<Drama>('dramas')
         .snapshotChanges().pipe(
           map(actions => actions.map(a => {
             const data = a.payload.doc.data() as Drama;
             const dramaId = a.payload.doc.id;
             return { dramaId, ...data };
           }))
         );
  }

  randomNum (max) {
    return Math.floor(Math.random()*(max-0+1)+0);
  }

  ngOnInit(): void {
    this.items.subscribe(data => console.log(data));
    console.log('testing: ' + this.items);
  }

}
