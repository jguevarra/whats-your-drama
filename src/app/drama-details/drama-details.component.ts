import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-drama-details',
  templateUrl: './drama-details.component.html',
  styleUrls: ['./drama-details.component.css']
})
export class DramaDetailsComponent implements OnInit {
  public item: AngularFirestoreDocument<any[]>;

  constructor(public db: AngularFirestore) 
  {
    this.item = this.db.doc('/dramas/3rkO4udPPDT9fPwvhazu');
  }

  ngOnInit(): void {
  }

  

}
