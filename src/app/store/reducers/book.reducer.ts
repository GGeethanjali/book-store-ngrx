import {Action, createReducer, on} from '@ngrx/store';
import {BookState, initialBookState} from '../state/book.state';
import {getBooksSuccess} from '../actions/book.actions';

const bookReducer = createReducer(
  initialBookState,
  on(getBooksSuccess, (state, {payload}) => ({...state, books: payload}))
);

export function reducer(state: BookState | undefined, action: Action): BookState {
  return bookReducer(state, action);
}
