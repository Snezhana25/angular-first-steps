import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface IPeriodicElement {
  email: string;
  name: string;
  phone: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class MyTableService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getElementData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users'); // any[]
  }
}
