import {ActionReducerMap} from '@ngrx/store';
import {AppState} from '../state/app.state';
import { reducer as book } from './book.reducer';

export const reducers: ActionReducerMap<AppState, any> = {
  book
};
