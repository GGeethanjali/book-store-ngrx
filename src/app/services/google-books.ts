import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Book} from '../models/book';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";


@Injectable()
export class GoogleBooksService {
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {
  }

  searchHistoryBooks(): Observable<Book[]> {
    return this.http.get(`${this.API_PATH}?q=history&maxResults=10` , {responseType: "json"})
      .pipe(map(response => response['items'] || []));
  }

  retrieveBook(volumeId: string): Observable<Book> {
    return this.http.get(`${this.API_PATH}/${volumeId}` , {responseType: "json"})
      .pipe(map(response => response as Book));
  }
}
