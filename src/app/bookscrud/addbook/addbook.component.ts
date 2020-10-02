import { BooksserviceService } from './../../service/booksservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from 'src/app/model/books';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {


  book = new Books();

  catOptions: any = ['Engineering','Medical', 'Competitive','Self-Development','Biographies','Computers And Tech','Entertainment','Literature And Fiction','SciFi And Fantasy','Travel','Others'];
  contentROptions: any = ['1', '2', '3','4','5'];
  qualityROptions: any = ['1', '2', '3','4','5'];

  constructor(private _route: Router, private _service: BooksserviceService) { }

  ngOnInit(): void {
  }

  selectCat(tempCat: any): any {
    this.book.bookCategory = tempCat;
  }

  selectContentRating(tempContR: any): any {
    this.book.bookContentRating = tempContR;
  }

  selectQualityRating(tempContR: any): any {
    this.book.bookQualityRating = tempContR;
  }

  addProductFormSubmit() {
    this._service.addProductToRemote(this.book).subscribe(
      (data) => {
        console.log('data added succesfully');
        this._route.navigate(['/']);
      },
      (error) => console.error('error')
    );
  }



}
