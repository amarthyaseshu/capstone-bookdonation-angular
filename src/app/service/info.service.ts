import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private valueSource = new BehaviorSubject('');
 
  currentValue = this.valueSource.asObservable();

  constructor() { }

  changeValue(value: string) {
    this.valueSource.next(value);
  }

}
