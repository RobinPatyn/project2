import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { RegisterPage } from '../register/register';
import { ListPage } from '../list/list';

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

  user={
    email:"robinpatyn@hotmail.com",
    password:"testwachtwoord"
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authService:AuthServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.authService.login(this.user.email,this.user.password)
    .then(()=>{
      if(this.authService.isLoggedIn){
        this.navCtrl.setRoot(ListPage);
      }
    });
  }
  register(){
    this.navCtrl.setRoot(RegisterPage);
  }
}


