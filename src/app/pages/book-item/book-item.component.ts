import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';
import {selectBook} from '../../store/selectors/book.selector';
import {filter, take, tap} from 'rxjs/operators';
import {getBooks} from '../../store/actions/book.actions';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  books: Book[];

  constructor(private store: Store<AppState>) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.store.select(selectBook).pipe(
      tap((data: Book[]) => {
        if (data === undefined || data.length === 0) {
          this.store.dispatch(getBooks());
        }
      }),
      filter((data: Book[]) => data.length !== 0),
      take(1)
    ).subscribe((data) => {
      this.books = data;
    });
  }
}
