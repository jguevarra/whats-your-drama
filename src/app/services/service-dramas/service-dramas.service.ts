import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Dramas } from '../../dramas';

@Injectable({
  providedIn: 'root'
})
export class ServiceDramasService {

  private dbPath: string = '/dramas';

  dramaListRef: AngularFireList<Dramas> = null;      // Reference to drama list, Its an Observable
  // dramaObj: AngularFireObject<any>;     // Reference to drama object, Its an Observable too

  constructor(private db: AngularFireDatabase ) 
  {
    this.dramaListRef = db.list(this.dbPath);
  }

  getDramaList(): AngularFireList<Dramas>      // Returns kdrama list
  {
    return this.dramaListRef;
  }

}
