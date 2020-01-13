import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors(){
    var authors = ["Author1", "Author2", "Author3"];
    return authors;
  }
}
