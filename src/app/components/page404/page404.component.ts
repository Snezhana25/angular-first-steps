import { Component, OnInit } from '@angular/core';
import {take} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {
  path: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.pipe(take(1))
        .subscribe((data: { path: string }) => {
          this.path = data.path;
        });
  }

}
