import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StylistProvider } from '../../providers/stylist/stylist';

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

  stylists = [];

  constructor(
    private stylistProvider: StylistProvider,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.stylists = this.stylistProvider.getStylists();
    console.log('ionViewDidLoad StylistsPage');
  }

}
