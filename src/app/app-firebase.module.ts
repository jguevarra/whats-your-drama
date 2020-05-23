import { NgModule } from '@angular/core';

// Firebase main module
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

// Firebase other modules
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFirestoreModule } from 'angularfire2/firestore';


@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
  ],
  exports: [
    AngularFireAuthModule, 
    AngularFireModule,
    // AngularFirestoreModule // Only required for database features
    // AngularFirestoreModule // Only required for database features
  ]
})
export class AppFirebaseModule { }
