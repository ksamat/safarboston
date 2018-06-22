import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GoogleMap, GoogleMaps, GoogleMapOptions } from '@ionic-native/google-maps';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  @ViewChild('map') map: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
    // this.map = new google.maps.Map(document.getElementById('map'), {
    //   center: {lat: -34.397, lng: 150.644},
    //   zoom: 8
    // });
    // let mapOptions: GoogleMapOptions = {
    //   camera: {
    //      target: {
    //        lat: 43.0741904,
    //        lng: -89.3809802
    //      },
    //      zoom: 18,
    //      tilt: 30
    //    }
    // };
    // this.map = GoogleMaps.create('map_canvas', mapOptions);
  }

}
