import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

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
  selector: 'app-dramalist',
  templateUrl: './dramalist.component.html',
  styleUrls: ['./dramalist.component.css']
})
export class DramalistComponent implements OnInit {

  // public items: Observable<any[]>;
  public items: Observable<any[]>;

  constructor(public db: AngularFirestore) 
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

  ngOnInit(): void 
  {
    this.items.subscribe(data => console.log(data));
  }
}
