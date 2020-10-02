import { BooksserviceService } from './../../service/booksservice.service';
import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/model/books';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  
  book=new Books();
  catOptions: any = ['Engineering','Medical', 'Competitive','Self-Development','Biographies','Computers And Tech','Entertainment','Literature And Fiction','SciFi And Fantasy','Travel','Others'];
  contentROptions: any = ['1', '2', '3','4','5'];
  qualityROptions: any = ['1', '2', '3','4','5'];


  constructor(private _route:Router,private _service:BooksserviceService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    let id=parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchProductByIdFromRemote(id).subscribe(
      data=>{console.log("data received");
    this.book=data;
    },
      error=>{
console.log("exception occured");
      }
    )

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

  updateProductFormSubmit(){
    this._service.addProductToRemote(this.book).subscribe(
      data=>{
        console.log("data added succesfully");
        this._route.navigate(['/']);
      },
     error=> console.error("error")
      
    )
      }

      


}
