import { Component, OnInit, OnDestroy, EventEmitter, Input, Output } from '@angular/core';
import { catchError, takeUntil, filter } from 'rxjs/operators';
import { EMPTY, Observable, of, Subject } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { auth } from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  destroyed$: Subject<null> = new Subject(); // destroy lifecycle -- prevent bad memory leak
  user$: Observable<firebase.User> = this.auth.user$;

  @Input() user: firebase.User;
  @Output() logoutClick: EventEmitter<null> = new EventEmitter<null>();

  constructor(
    private readonly auth: AuthService,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
  }

  login() {
    this.auth.loginViaGoogle()
      .pipe(
        catchError(error => of(null)),
        filter((res) => res),
        takeUntil(this.destroyed$)
      )
      .subscribe( (authState: auth.UserCredential) => {
          this.snackBar.open('Welcome back!', 'OK', {
            duration: 4000
          });
        }
      );
  }

  logout() {
    this.auth.logout()
      .pipe(
        catchError(error => of(null)),
        filter((res) => res),
        takeUntil(this.destroyed$)
      )
      .subscribe(
        (authState: auth.UserCredential) => {
            this.snackBar.open('Goodbye!', 'OK', {
              duration: 4000
            });
          
        }
      );
  }

  // logout() {
  //   this.logoutClick.emit();
  // }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
