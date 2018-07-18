import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions
 } from '@ionic-native/google-maps';



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

  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
  }

  public sendEmail() {
    let email = {
      to: 'info@safarboston.com'
    };
    this.emailComposer.open(email);
  }
   
  public send2Email() {
    // send email to the resource
    let email = {
      to: 'reservations@safarboston.com'
    };
    this.emailComposer.open(email);
  }
  
}
