import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import {  MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.scss']
})
export class AddTweetComponent implements OnInit {

  constructor(private homeService: HomeService, private _snackBar: MatSnackBar) { }

  postTweet(tweet) {
    this.homeService.postTweet(tweet).subscribe(data =>{
      this._snackBar.open('Tweet Added','', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-accent']
      });
      this.homeService.tweetAdded.next(true);
    }, error => {
      console.log(error);
    })
  }
  ngOnInit(): void {
  }

}
