import {AppState} from '../state/app.state';
import {BookState} from '../state/book.state';

const selectBook = (state: AppState): BookState => state.book;
