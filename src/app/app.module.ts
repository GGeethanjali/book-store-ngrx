import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {GoogleBooksService} from './services/google-books';
import {LayoutModule} from '@angular/cdk/layout';
import {BookItemComponent} from './pages/book-item/book-item.component';
import {MenuComponent} from './pages/menu/menu.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {HomeComponent} from './pages/home/home.component';
import {InputTextModule} from 'primeng/inputtext';
import {OrderListModule} from 'primeng/orderlist';


@NgModule({
  declarations: [
    AppComponent,
    BookItemComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    TabMenuModule,
    InputTextModule,
    OrderListModule
  ],
  providers: [
    GoogleBooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
