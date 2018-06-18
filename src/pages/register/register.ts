import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import { User } from '../../models/user';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ActiviteitenPage } from '../activiteiten/activiteiten';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user={
    email:"",
    password:"",
    password2:""
  }

  constructor(
    private AuthService: AuthServiceProvider,
    private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl:ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  login() {
    this.navCtrl.setRoot(LoginPage);
  }

  register(){
    if(this.user.password===this.user.password2){
      this.AuthService.register(this.user.email,this.user.password)
      .then(()=>{
        if(this.AuthService.isRegisterSuccess){
          this.AuthService.isRegisterSuccess=false;
          this.navCtrl.setRoot(ActiviteitenPage);
        }
      });
    }else{
      this.presentToast("Passwords need to be identical.");
    }
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast', message);
    });

    toast.present();
  }
}

