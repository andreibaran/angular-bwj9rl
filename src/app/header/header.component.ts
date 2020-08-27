import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  data: Observable<any>;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.data = this.httpClient.get('/assets/header.json');
  }
}