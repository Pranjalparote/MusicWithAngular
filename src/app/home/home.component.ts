import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private musicService: MusicService , private route: Router) { }
  arrayOfMusic: any = [];
  ngOnInit() {
      this.musicService.getTrendMusic().subscribe(data =>
        {
            console.log(data.tracks.track);
            this.arrayOfMusic = data.tracks.track;
        });
  }
  click(value){
    this.route.navigateByUrl("/result/" + value);
    console.log("This  Works");
  }

  addToFav(music): any
  {
    console.log( "add hjg fav" );

    let myVal = {
      musicId :music.playcount,
      musicName:music.name,
      comment:music.artist.name
    }

    this.musicService.addToWishlist(myVal);


}

getDetails(music){
  console.log(music);
  console.log(music.name, music.artist.name);
  this.route.navigateByUrl("/details/"+music.name+"/"+music.artist.name);
}
}
