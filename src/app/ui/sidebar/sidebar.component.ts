import { InfoService } from './../../service/info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  value:string;
  constructor(private info:InfoService) { }

  ngOnInit(): void {
    this.info.currentValue.subscribe((value)=>(this.value=value));
  }

  setValue(val: string) {
    this.info.changeValue(val);
  }

}
