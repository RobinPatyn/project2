import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import { ProfilePage } from '../profile/profile';
import { User } from '../../models/user';


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

  profile = {} as Profile;

  user = {} as User;

  constructor(
    private afAuth: AngularFireAuth,
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

  async register(user: User){
    if(this.user.password===this.user.password2){
      try{
   const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
   console.log(result);
   this.afAuth.authState.take(1).subscribe( auth => {
    this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
    .then(() => this.navCtrl.setRoot(ProfilePage));
   })
      }
      catch (e){
        console.error(e);
      }
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

