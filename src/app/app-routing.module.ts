import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {BookItemComponent} from "./pages/book-item/book-item.component";

const routes: Routes = [
  {
    path: 'books',
    component: BookItemComponent,
    pathMatch: 'prefix',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'prefix',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
