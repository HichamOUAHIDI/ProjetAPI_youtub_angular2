/**
 * Created by hicham on 04/03/2017.
 */
import {Http,Response} from '@angular/http';
import {Injectable} from '@angular/core';
 const BASE_URL ='https://www.googleapis.com/youtube/v3/search';
 const API_TOKEN='AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0';
@Injectable()
export class YoutubeService {
   constructor(private _http:Http){}

   search(query){
     return this._http.get(`${BASE_URL}?q=${query}&part=snippet&key=${API_TOKEN}`)
       .map((res:Response)=> res.json())
       .map(json => json.items);
   }
 }
