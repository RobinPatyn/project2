import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false);
  }

  login() {
    this.navCtrl.setRoot(LoginPage);
  }

  register() {
    this.navCtrl.setRoot(RegisterPage);
  }

  about() {
    this.navCtrl.push(AboutPage);
  }
}