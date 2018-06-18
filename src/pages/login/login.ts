import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { User } from '../../models/user';
import { HomePage } from '../home/home';
import { ActiviteitenPage } from '../activiteiten/activiteiten';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
    private authService: AuthServiceProvider,
    private toast : ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams    
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.authService.login(this.user.email,this.user.password)
    .then(()=>{
      if(this.authService.isLoggedIn){
        this.navCtrl.setRoot(ActiviteitenPage);
      }
    });
  }

  register(){
    this.navCtrl.setRoot(RegisterPage);
  }
}


