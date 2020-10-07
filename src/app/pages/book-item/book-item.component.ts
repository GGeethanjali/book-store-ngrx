import {Component, OnInit} from '@angular/core';
import {Book} from "../../models/book";
import {GoogleBooksService} from "../../services/google-books";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  books: Book[];

  constructor(private booksService: GoogleBooksService) {
  }

  ngOnInit() {
    this.booksService.searchHistoryBooks().subscribe(data => this.books = data);
  }
}
