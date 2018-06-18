import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable'
import { Profile } from '../../models/profile';
import { ProfileService } from '../../services/profile/profile-service'
import { User } from '../../models/user';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';

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

  stores: Observable<any[]>;

  profile: Profile;

  constructor(
    private afAuth: AngularFireAuth,
    private db: FireDataServiceProvider,
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
          
         this.stores = this.db.getAll();

         this.stores.subscribe((result) => {
          console.log("got this data from provider", result);
        }, (error) => {
          console.log("Didn't get any data", error);
        })
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
