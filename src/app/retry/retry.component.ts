import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html'
})
export class RetryComponent implements OnInit {
  data: Observable<any>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('https://18.185.139.108/egm-importe?fahrplanjahr=2020').pipe(
      catchError(err => {
        console.log(err);
        return of('there was an error');
      })
    ).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    }, () => {
      console.log('done');
    });
  }
}