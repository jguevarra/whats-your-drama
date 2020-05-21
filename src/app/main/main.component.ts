import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { EMPTY, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user$: Observable<firebase.User> = this.auth.user$;
  constructor(
    private readonly auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
