import { Component, OnInit, Input } from '@angular/core';
// import { ServiceDramasService } from '../services/service-dramas/service-dramas.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
// import { Dramas } from '../dramas';

@Component({
  selector: 'app-dramalist',
  templateUrl: './dramalist.component.html',
  styleUrls: ['./dramalist.component.css']
})
export class DramalistComponent implements OnInit {

  // @Input() drama: Dramas;
  // dramas: any;
  public items: Observable<any[]>;

  constructor(
    // private dramaService: ServiceDramasService
    db: AngularFirestore
  ) 
  {
    this.items = db.collection('/dramas').valueChanges();
  }

  ngOnInit(): void {
    // this.getDramaList();
  }

  // getDramaList()
  // {
  //   this.dramaService.getDramaList().snapshotChanges().pipe
  //   (
  //     map(changes =>
  //       changes.map(c =>
  //         ({ key: c.payload.key, ...c.payload.val() })  
  //       )
  //     )
  //   ).subscribe(dramas => {
  //     this.dramas = dramas;
  //   });
  // }
}
