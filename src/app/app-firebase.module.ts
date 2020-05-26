import { NgModule } from '@angular/core';

// Firebase main module
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

// Firebase other modules
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';


@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
  ],
  exports: [
    AngularFireAuthModule, 
    AngularFireModule,
    AngularFireDatabaseModule
  ]
})
export class AppFirebaseModule { }
