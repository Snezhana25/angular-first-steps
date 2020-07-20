import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator, MatSort} from '@angular/material';
import {MyTableService} from './my-table.service';
import {Sort} from '@angular/material';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  todos;
  dataSource;

  displayedColumns: string[] = ['name', 'username', 'email', 'phone'];

  constructor(
      private service: MyTableService,
      private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getElementData();
    this.cdr.detectChanges();
  }

  private getElementData(): void {
    this.service.getElementData().subscribe(res => {
      this.todos = res;
      this.dataSource = new MatTableDataSource( this.todos );
      console.log('this.dataSource', this.dataSource);
      console.log('this.todos', this.todos);
    });
  }

  sortData(sort: Sort) { this.dataSource.sort = this.sort; }

  pageEvent(event) {
    this.dataSource.paginator = this.paginator;
  }
}
