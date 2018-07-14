import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-stylist',
  templateUrl: 'stylist.html',
})
export class StylistPage {

  stylist;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.stylist = navParams.data; // kabildap alyp zhatyr
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StylistPage');
    console.log(this.stylist);
  }

}