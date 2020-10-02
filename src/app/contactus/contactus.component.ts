import { ContactService } from './../service/contact.service';
import { Contact } from './../model/contact';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contact=new Contact();
  msg='';

  constructor(private _service:ContactService,private _router:Router) { }

  ngOnInit(): void {
  }

  addContact(){
    this._service.addContactFromRemote(this.contact).subscribe(
      data=>{console.log("response received");
    this._router.navigate(['/'])},
    error=>{console.log("response received");
  this.msg=error.error;}
    )
  }

}
