import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {filter, map, switchMap} from 'rxjs/operators';
import {untilDestroyed} from 'ngx-take-until-destroy';


@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.scss']
})
export class MyLoginComponent implements OnInit, OnDestroy {
  id: number;
  currentPageId: Subscription;
  show = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentPageId = this.route.paramMap.pipe(switchMap(params => params.getAll('id')))
        .subscribe(data => this.id = +data);
  }

  onChanged(event) {
    this.show = event;
  }

  ngOnDestroy() {
    this.currentPageId.unsubscribe();
  }

}
