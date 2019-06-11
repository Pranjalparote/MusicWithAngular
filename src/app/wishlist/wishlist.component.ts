import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Track } from '../track';
import { MusicService } from '../music.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
track = [];
constructor(private musicService: MusicService ,private route :Router) { }

  ngOnInit() {
       this.getWishlist();
  }
getWishlist() : any{
  this.musicService.getWishlist().subscribe(data => {
    this.track = data;
  });
}



deleteFromWishlist(id): any {
console.log("Delete From Wishlist");
 this.musicService.deleteWishList(id).subscribe()
}
}




