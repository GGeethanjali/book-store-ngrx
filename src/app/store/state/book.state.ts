import {Book} from '../../models/book';

export interface BookState {
  books: Book[];
}

export const initialBookState: BookState = {
  books: []
};
