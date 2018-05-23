import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {

  services;

  constructor(
    private serviceProvider: ServiceProvider,
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.services = serviceProvider.getServices();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
  }

}
