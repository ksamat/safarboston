import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutPage } from '../pages/about/about';
import { ServicesPage } from '../pages/services/services';
import { VideosPage } from '../pages/videos/videos';
import { PhotosPage } from '../pages/photos/photos';
import { ContactPage } from '../pages/contact/contact';
import { StylistsPage } from '../pages/stylists/stylists';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ContactPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'About', component: AboutPage },
      { title: 'Services', component: ServicesPage },
      { title: 'Videos', component: VideosPage },
      { title: 'Photos', component: PhotosPage },
      { title: 'Contact', component: ContactPage },
      { title: 'Stylists', component: StylistsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
