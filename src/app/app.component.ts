import { Component } from '@angular/core';
import {NgModule} from '@angular/core';
import {YoutubeapiService} from './youtubapi.service';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

import {FormControl,ReactiveFormsModule} from "@angular/forms";
@NgModule({
  imports:  [FormControl, ReactiveFormsModule],
  declarations:[AppComponent],
  bootstrap: [AppComponent]
})
@Component({
  selector: 'my-app',
  templateUrl:'.app/component.html',
  styleUrls:['./app.component.css'],
  providers:[YoutubeapiService,FormControl,ReactiveFormsModule]
})
export class AppComponent  {
  search=new FormControl();
  // chercher un le mot cle
  results:Observable<any>;
  constructor(public youtube:YoutubeapiService){
    this.results=
      this.search.valueChanges
        .debounceTime(200)
        .switchMap(query => youtube.search(query))
  }

}
