import { Component, OnInit, OnDestroy } from '@angular/core';
import { catchError, takeUntil } from 'rxjs/operators';
import { EMPTY, Observable, of, Subject } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { FEED } from './../../consts/routes.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  destroyed$: Subject<null> = new Subject(); // destroy lifecycle -- prevent bad memory leak
  user$: Observable<firebase.User> = this.auth.user$;

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
        takeUntil(this.destroyed$)
      )
      .subscribe(
        authState => {
          if (authState) {
            this.snackBar.open('Welcome Back!', 'OK', {
              duration: 4000
            });
          }
        }
      );
  }

  logout() {
    this.auth.logout()
      .pipe(
        catchError(error => of(null)),
        takeUntil(this.destroyed$)
      )
      .subscribe(
        authState => {
          if (authState) {
            this.snackBar.open('Goodbye!', 'OK', {
              duration: 4000
            });
          }
        }
      );
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
