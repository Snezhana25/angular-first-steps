import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyHomeComponent } from './components/my-home/my-home.component';
import {MyLoginComponent} from './components/my-login/my-login.component';
import {MyTableComponent} from './components/my-table/my-table.component';

const itemRoutes: Routes = [
  {path: 'my-table', component: MyTableComponent},
];

const routes: Routes = [
  {path: '', redirectTo: '/my-home', pathMatch: 'full'},
  {path: 'my-home', component: MyHomeComponent},
  {path: 'my-login', component: MyLoginComponent},
  {path: 'my-login/:id', component: MyLoginComponent, children: itemRoutes},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
