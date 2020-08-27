import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-format',
  templateUrl: './format.component.html'
})
export class FormatComponent implements OnInit {
  data: Observable<any>;
  rawJson = `
  {
    "id": "123",
    "metadata": "blah",
    "data": {
      "users": {
        "count": 4,
        "list": [
          "bob",
          "john",
          "doe"
        ]
      }
    }
  }
  `

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.data = this.httpClient.get('/assets/format.json');
  }
}