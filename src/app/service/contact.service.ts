import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http:HttpClient) { }

  public addContactFromRemote(contact: Contact): Observable<any> {
    return this._http.post<any>("http://localhost:8083/addcontact", contact);
  }

}
