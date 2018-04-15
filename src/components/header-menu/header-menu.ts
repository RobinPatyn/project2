import { Component } from '@angular/core';
import { App, Nav, MenuController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { AboutPage } from '../../pages/about/about';
import { SettingsPage } from '../../pages/settings/settings';
import { ProfilePage } from '../../pages/profile/profile';
import { ActiviteitenPage } from '../../pages/activiteiten/activiteiten';
import { AddActiviteitPage } from '../../pages/add-activiteit/add-activiteit';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})

export class HeaderMenuComponent {

  constructor(
    private afAuth: AngularFireAuth,
    public menuCtrl: MenuController,
    public app: App
  ){

    console.log('Hello HeaderMenuComponent Component');
  }
  
  profileClicked() {
    console.log("Profile");
    this.menuCtrl.close();
    var nav = this.app.getRootNav();
    nav.setRoot(ProfilePage);
  }

  activiteitenClicked() {
    console.log("activiteiten");
    this.menuCtrl.close();
    var nav = this.app.getRootNav();
    nav.setRoot(ActiviteitenPage);
  }

  addActiviteitClicked() {
    console.log("activiteit toevoegen");
    this.menuCtrl.close();
    var nav = this.app.getRootNav();
    nav.setRoot(AddActiviteitPage);
  }

  settingsClicked() {
    console.log("settings");
    this.menuCtrl.close();
    var nav = this.app.getRootNav();
    nav.setRoot(SettingsPage);
  }

  aboutClicked() {
    console.log("about");
    var nav = this.app.getRootNav();
    this.menuCtrl.close();
    nav.setRoot(AboutPage);
  }

  logoutClicked() {
    console.log("Logout");
    this.afAuth.auth.signOut();
    this.menuCtrl.close();
    var nav = this.app.getRootNav();
    nav.setRoot(HomePage);
  }
}