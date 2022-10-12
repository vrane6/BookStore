import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../_models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl: string = environment.baseUrl + 'api/';

  constructor(private http: HttpClient) { }

  public addBook(book: Book) {
    return this.http.post(this.baseUrl + 'Book', book);
  }

  public updateBook(id: number, book: Book) {
    return this.http.put(this.baseUrl + 'Book/' + id, book);
  }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl + 'Book');
  }

  public deleteBook(id: number) {
    return this.http.delete(this.baseUrl + 'Book/' + id);
  }

  public getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.baseUrl + 'Book/' + id)
  }

  public SearchBookWithCategory(searchedValue: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}book/search-book-with-category/${searchedValue}`);
  }
}

