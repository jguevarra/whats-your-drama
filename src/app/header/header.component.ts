import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  myCustomData?: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
  }
}
