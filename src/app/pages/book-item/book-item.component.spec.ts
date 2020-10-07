import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookItemComponent} from './book-item.component';
import {OrderListModule} from 'primeng/orderlist';
import {GoogleBooksService} from '../../services/google-books';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {AppState} from '../../store/state/app.state';
import {Store} from '@ngrx/store';

describe('BookItemComponent', () => {
  let component: BookItemComponent;
  let fixture: ComponentFixture<BookItemComponent>;
  let store: MockStore<AppState>;

  const initialState = {
    books: []
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookItemComponent],
      imports: [OrderListModule, HttpClientTestingModule],
      providers: [GoogleBooksService, provideMockStore({ initialState })]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookItemComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
