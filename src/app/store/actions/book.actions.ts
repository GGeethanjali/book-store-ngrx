import {createAction, props} from '@ngrx/store';
import {Book} from '../../models/book';

export enum BookActionsEnum {
  GetBooks = '[Book] Get Books',
  GetBooksSuccess = '[Book] Get Books Success'
}

export const getBooks = createAction(BookActionsEnum.GetBooks, props<{ payload: Book[] }>());
export const getBooksSuccess = createAction(BookActionsEnum.GetBooksSuccess, props<{ payload: Book[] }>());
