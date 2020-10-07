import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {GoogleBooksService} from '../../services/google-books';
import {Book} from '../../models/book';
import {getBooks, getBooksSuccess} from '../actions/book.actions';

@Injectable()
export class BookEffects {
  @Effect()
  getBooks$ = this.actions$.pipe(
    ofType(getBooks),
    switchMap(() => this.booksService.searchHistoryBooks()),
    switchMap((books: Book[]) => of(getBooksSuccess({payload: books})))
  );

  constructor(private booksService: GoogleBooksService, private actions$: Actions) {
  }
}
