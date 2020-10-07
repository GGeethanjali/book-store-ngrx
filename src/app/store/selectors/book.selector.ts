import {AppState} from '../state/app.state';
import {BookState} from '../state/book.state';
import {createSelector} from '@ngrx/store';

const selectBooks = (state: AppState): BookState => state.book;

export const selectBook = createSelector(selectBooks, (state: BookState) => state.books);
