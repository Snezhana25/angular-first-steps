import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.scss']
})
export class MyLoginComponent implements OnInit, OnDestroy {
  id: number;
  routeSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe( s => console.log('---', s));

    this.routeSubscription = this.route.params.subscribe(params => this.id = params['id']);

  }

  ngOnDestroy() {
    // this.routeSubscription.unsubscribe();
  }

}
