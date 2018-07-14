import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { HttpClient } from '@angular/common/http';
import { VideoPage } from "../video/video"
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {
  apiKey = 'AIzaSyDkQSkfOOKZVwZ8icucD4WevHNkIAOahx4';
  listId = 'PLJW9UKWPMY8bnfZMh7Ja9ET9mKFCOWgyF';
  videos = [];


  constructor(
    public http: HttpClient,
    private youtube: YoutubeVideoPlayer,
    public navCtrl: NavController, 
    public navParams: NavParams) {
     
  }

  ionViewDidLoad() {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + this.listId +'&part=snippet,id&maxResults=20')
    .subscribe((data) => {
      this.videos = data['items'];
    });
  }

    openVideo(video) {
      // this.navCtrl.push(VideoPage, video); 
      this.youtube.openVideo(video.snippet.resourceId.videoId);
      console.log(video);
    }
  }



