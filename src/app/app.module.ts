import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { EmailComposer } from '@ionic-native/email-composer';
import { GoogleMaps } from '@ionic-native/google-maps';


import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ServicesPage } from '../pages/services/services';
import { VideosPage } from '../pages/videos/videos';
import { PhotosPage } from '../pages/photos/photos';
import { ContactPage } from '../pages/contact/contact';
import { StylistsPage } from '../pages/stylists/stylists';
import { PromotionsPage } from '../pages/promotions/promotions';
import { AppointmentsPage } from '../pages/appointments/appointments';
import { FacebookPage } from '../pages/facebook/facebook';
import { LookbookPage } from '../pages/lookbook/lookbook';
import { TwitterPage } from '../pages/twitter/twitter';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StylistProvider } from '../providers/stylist/stylist';
import { HttpClientModule } from '@angular/common/http';


import { ServiceProvider } from '../providers/service/service';
import { StylistPage } from '../pages/stylist/stylist';
import { VideoPage } from "../pages/video/video";

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ServicesPage,
    VideosPage,
    PhotosPage,
    ContactPage,
    StylistsPage,
    StylistPage,
    VideoPage,
    PromotionsPage,
    AppointmentsPage,
    FacebookPage,
    LookbookPage,
    TwitterPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ServicesPage,
    VideosPage,
    PhotosPage,
    ContactPage,
    StylistsPage,
    StylistPage,
    VideoPage,
    PromotionsPage,
    AppointmentsPage,
    FacebookPage,
    LookbookPage,
    TwitterPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StylistProvider,
    ServiceProvider,
    YoutubeVideoPlayer,
    Facebook,
    EmailComposer,
    GoogleMaps
  ]
})
export class AppModule {}
