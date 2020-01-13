import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl:'./authors.component.html'
  
})
export class AuthorsComponent implements OnInit {

  authors;
  countOfAuthors;
  constructor(service:AuthorsService) {
    this.authors = service.getAuthors();
   }

  ngOnInit() {
  }
  
}
