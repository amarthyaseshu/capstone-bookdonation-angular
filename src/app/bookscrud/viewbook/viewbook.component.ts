import { BooksserviceService } from './../../service/booksservice.service';
import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/model/books';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  book=new Books();

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

  goToEditProduct(id:number){
    console.log("id"+id);
    this._route.navigate(['/editbook',id]);
  }

  deleteProduct(id:number){
    this._service.deleteProductByIdFromRemote(id).subscribe(
      data=>{console.debug("deleted succesfully");
     
    },
      error=>{console.log("exception occured");
      this._route.navigate(['/']);
    }
    )
  }

}
