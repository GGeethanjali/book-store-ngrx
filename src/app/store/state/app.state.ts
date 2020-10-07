import {BookState, initialBookState} from './book.state';

export interface AppState {
  book: BookState;
}

export const initialAppState: AppState = {
  book: initialBookState
};

export function getInitialState(): AppState {
  return initialAppState;
}
