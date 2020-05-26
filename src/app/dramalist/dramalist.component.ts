import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dramalist',
  templateUrl: './dramalist.component.html',
  styleUrls: ['./dramalist.component.css']
})
export class DramalistComponent implements OnInit {

  public items: Observable<any[]>;

  constructor(public db: AngularFirestore) 
  {
    this.items = db.collection('/dramas').valueChanges({ idField: 'dramaId' });
  }

  ngOnInit(): void {}
}
