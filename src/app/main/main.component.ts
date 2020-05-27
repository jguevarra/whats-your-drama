import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { EMPTY, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}
