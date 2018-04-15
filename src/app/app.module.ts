import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HeaderMenuComponent } from '../components/header-menu/header-menu';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';
import { Camera } from '@ionic-native/camera';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsProvider } from '../providers/settings/settings';
import { ProfilePage } from '../pages/profile/profile';
import { ActiviteitenPage } from '../pages/activiteiten/activiteiten';
import { AddActiviteitPage } from '../pages/add-activiteit/add-activiteit';
import { ActiviteitenPageModule } from '../pages/activiteiten/activiteiten.module';
import { AddActiviteitPageModule } from '../pages/add-activiteit/add-activiteit.module';
import { ActiviteitenListService } from '../services/activiteiten-list/activiteiten-list.service';
import { ToastService } from '../services/toast/toast.service';
import { FireDataServiceProvider } from '../providers/fire-data-service/fire-data-service';

var config = {
  apiKey: "AIzaSyChYEFSRdfZ_t0RoQX1Q4sJo6rY5uyAqSE",
  authDomain: "project-5285d.firebaseapp.com",
  databaseURL: "https://project-5285d.firebaseio.com",
  projectId: "project-5285d",
  storageBucket: "project-5285d.appspot.com",
  messagingSenderId: "338151531502"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    LoginPage,
    RegisterPage,
    AboutPage,
    SettingsPage,
    HeaderMenuComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    ActiviteitenPageModule,
    AddActiviteitPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    ActiviteitenPage,
    AddActiviteitPage,
    LoginPage,
    RegisterPage,
    AboutPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider,
    ActiviteitenListService,
    ToastService,
    Camera,
    FireDataServiceProvider
  ]
})
export class AppModule {}
