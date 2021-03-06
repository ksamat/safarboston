import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StylistProvider } from '../../providers/stylist/stylist';
import { StylistPage } from '../stylist/stylist';

/**
 * Generated class for the StylistsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-stylists',
  templateUrl: 'stylists.html',
})
export class StylistsPage {

  stylists;

  constructor(
    private stylistProvider: StylistProvider,
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.stylists = this.stylistProvider.getStylists();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StylistsPage');
  }

  itemClicked(stylist) {
    console.log("Salem");
    this.navCtrl.push(StylistPage, stylist);
  }

}
