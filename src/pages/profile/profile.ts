import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import { Profile } from '../../models/profile';
import { User } from '../../models/user';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profileData: Observable<any>

  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private toast: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController
    
  ){
    this.menuCtrl.enable(true);
  }


  ionViewWillLoad() {

    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Welkom bij Mijn Jeugdbeweging, ${data.email}`,
          duration: 3000
        }).present();
          
          this.profileData = this.afDatabase.object(`profile/${data.uid}`).valueChanges()

      }
      else{
        this.toast.create({
          message: `Kon juiste authenticatiegegevens niet vinden`,
          duration: 3000
        }).present();
      }
    })
  }
}
