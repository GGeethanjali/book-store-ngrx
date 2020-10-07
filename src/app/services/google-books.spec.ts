import {inject, TestBed} from '@angular/core/testing';
import {GoogleBooksService} from './google-books';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('Service: GoogleBooks', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleBooksService],
      imports: [HttpClientTestingModule]
    });
  });

  const data = {
    'id': 'Book Title',
    'volumeInfo': {}
  };

  const books = {
    items: [
      {id: '12345', volumeInfo: {title: 'Title'}},
      {id: '67890', volumeInfo: {title: 'Another Title'}}
    ]
  };

  const queryTitle = 'Book Title';

  it('should call the search api and return the search results', inject(
    [HttpTestingController, GoogleBooksService],
    (httpMock: HttpTestingController, service: GoogleBooksService) => {
      // We call the service
      service
        .searchHistoryBooks()
        .subscribe((res) => {
          expect(res).toEqual(books.items);
        });

      const req = httpMock.expectOne(`https://www.googleapis.com/books/v1/volumes?q=history&maxResults=10`);
      expect(req.request.method).toEqual('GET');

      req.flush(books);
    }
  ));

  it('should retrieve the book from the volumeId', inject(
    [HttpTestingController, GoogleBooksService],
    (httpMock: HttpTestingController, service: GoogleBooksService) => {
      // We call the service
      service
        .retrieveBook(queryTitle)
        .subscribe((response) => {
          expect(response).toEqual(data);
        });

      const req = httpMock.expectOne(`https://www.googleapis.com/books/v1/volumes/${queryTitle}`);
      expect(req.request.method).toEqual('GET');

      req.flush(data);
    }
  ));
});



