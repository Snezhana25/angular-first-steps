import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material';

export interface PeriodicElement {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
}

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  todos = [];
  dataSource;

  displayedColumns: string[] = ['name', 'username', 'email', 'phone'];

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.sort = this.sort;

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.todos = json);
  }
}
