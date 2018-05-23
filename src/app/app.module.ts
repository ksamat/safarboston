import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ServicesPage } from '../pages/services/services';
import { VideosPage } from '../pages/videos/videos';
import { PhotosPage } from '../pages/photos/photos';
import { ContactPage } from '../pages/contact/contact';
import { StylistsPage } from '../pages/stylists/stylists';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StylistProvider } from '../providers/stylist/stylist';
import { HttpClientModule } from '@angular/common/http';
import { ServiceProvider } from '../providers/service/service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ServicesPage,
    VideosPage,
    PhotosPage,
    ContactPage,
    StylistsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ServicesPage,
    VideosPage,
    PhotosPage,
    ContactPage,
    StylistsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StylistProvider,
    ServiceProvider
  ]
})
export class AppModule {}
