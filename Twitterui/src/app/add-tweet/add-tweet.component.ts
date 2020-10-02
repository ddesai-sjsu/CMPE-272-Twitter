import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.scss']
})
export class AddTweetComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  postTweet(tweet) {
    this.homeService.postTweet(tweet).subscribe(data =>{
      console.log('Yayyy')
    }, error => {
      console.log(error);
    })
  }
  ngOnInit(): void {
  }

}
