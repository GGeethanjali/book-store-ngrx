import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookItemComponent} from './book-item.component';
import {OrderListModule} from 'primeng/orderlist';
import {GoogleBooksService} from '../../services/google-books';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BookItemComponent', () => {
  let component: BookItemComponent;
  let fixture: ComponentFixture<BookItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookItemComponent],
      imports: [OrderListModule, HttpClientTestingModule],
      providers: [GoogleBooksService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
