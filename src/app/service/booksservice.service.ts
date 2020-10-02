import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../model/books';
@Injectable({
  providedIn: 'root'
})
export class BooksserviceService {

  constructor(private _http:HttpClient) { }

  fetchProductListFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:8083/getbookslist");
  }

  addProductToRemote(book:Books):Observable<any>{
    return this._http.post<any>("http://localhost:8083/addbooks",book);
  }

  fetchProductByIdFromRemote(id:number):Observable<any>{
    return this._http.get<any>("http://localhost:8083/getbooksbyid/"+id);
  }

  deleteProductByIdFromRemote(id:number):Observable<any>{
    return this._http.delete<any>("http://localhost:8083/deletebooksbyid/"+id);
  }

}
