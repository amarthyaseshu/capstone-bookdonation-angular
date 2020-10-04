import { InfoService } from './../../service/info.service';
import { Router } from '@angular/router';
import { BooksserviceService } from './../../service/booksservice.service';
import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/model/books';

@Component({
  selector: 'app-viewallbooks',
  templateUrl: './viewallbooks.component.html',
  styleUrls: ['./viewallbooks.component.css']
})
export class ViewallbooksComponent implements OnInit {

  booklist:Books[];
  pattern:string;
  filtering:string;

  constructor(private _service:BooksserviceService,private _route:Router,private info:InfoService) { }

  ngOnInit(): void {

    this._service.fetchProductListFromRemote().subscribe(
      data=>{console.log("response received");
    this.booklist=data;
    console.log(this.booklist);
    },
      error=>console.log("exception occured")
    );
    this.info.currentValue.subscribe((value)=>(this.filtering=value));

  }

  goToViewProduct(id:number){
   console.log("id"+id);
   this._route.navigate(['/viewbook',id]);
 }
 

}
