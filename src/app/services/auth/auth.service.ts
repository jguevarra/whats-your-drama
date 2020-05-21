import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // grabbing the user (to access the properties and info of the user)
  // behavior subject takes last admitted value
  private user: BehaviorSubject<Observable<firebase.User>> = new BehaviorSubject<Observable<firebase.User>>(null);

  user$: Observable<firebase.User> = this.user
    .asObservable()
    .pipe(switchMap((user: Observable<firebase.User>) => user));

  constructor(private readonly afAuth: AngularFireAuth) { // security reasons!
    // adds new value into variable stream
    this.user.next(this.afAuth.authState); // exposes firebase.user property (provides information about the user)
  }

  // promises
  loginViaGoogle(): Observable<auth.UserCredential> {
    return from(this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())); // converting promise into an observable
  }

  logout(): Observable<void> {
    return from(this.afAuth.signOut());
  }
}
