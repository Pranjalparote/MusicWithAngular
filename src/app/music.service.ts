import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Track} from './track';
@Injectable({
  providedIn: 'root'
})
export class MusicService {
public track;
public count = 100;
constructor(private http: HttpClient) { }


  getTrendMusic(): any {
return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=157152fa4fd792dec3243a1ae52f020a&format=json`);
  }

  getMusic(value): any {

    var url = `http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=157152fa4fd792dec3243a1ae52f020a&track=${value}&format=json`;
    return this.http.get(url);
  }

  addToWishlist(value): any {
    console.log("Inside Service");
      this.http.post('http://localhost:8090/api/v1/musicpost',value).subscribe();
      }
      getWishlist(): any {
        return this.http.get("http://localhost:8090/api/v1/musicget");
      }


      deleteWishList(id){
        console.log("delete function is  working fine");
       return this.http.delete(`http://localhost:8090/api/v1/musicdelete/${id}`,id);
       }


       getDetails(artist, name): any {
       console.log(artist, name )
        console.log("details  are fetched")
        var url=`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=157152fa4fd792dec3243a1ae52f020a&artist=${artist}&track=${name}&format=json`;

        return this.http.get(url);
       }

  }
