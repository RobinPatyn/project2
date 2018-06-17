import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Activiteit } from '../../models/activiteit/activiteit.model';
import { ActiviteitenListService } from '../../services/activiteiten-list/activiteiten-list.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';


/**
 * Generated class for the ActiviteitDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activiteit-detail',
  templateUrl: 'activiteit-detail.html',
})
export class ActiviteitDetailPage {

  stores: Observable<any[]>;
  avatarData="";

  activiteit: Activiteit;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private db: FireDataServiceProvider
  ) {
  }

  ionViewDidLoad(){
    console.log ('ionViewDidLoad ActiviteitDetailPage');
    this.stores = this.db.getAll();

    this.stores.subscribe((result) => {
      console.log("got this data from provider", result);
    }, (error) => {
      console.log("Didn't get any data", error);
    })
  }

  ionViewWillLoad() {
    this.activiteit = this.navParams.get('activiteit');
  }

}
