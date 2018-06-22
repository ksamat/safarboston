import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.data);
    console.log('Hiiii');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

 

}
