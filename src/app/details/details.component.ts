import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  constructor(private musicService: MusicService, private route: ActivatedRoute,private router : Router) { }
    music: any;
  ngOnInit() {
  }

getDetails(): void {

   const artist = this.route.snapshot.paramMap.get('id1');
   const name = this.route.snapshot.paramMap.get('id2');

   console.log(artist,name);

    this.musicService.getDetails(artist,name).subscribe(data => {
    console.log("This details  works");
     this.music=data;
     console.log(this.music)
     console.log(data);
 });

}

}

