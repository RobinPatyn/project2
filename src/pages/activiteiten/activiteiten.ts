import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { ActiviteitenListService } from '../../services/activiteiten-list/activiteiten-list.service';
import { Observable } from 'rxjs/Observable';
import { Activiteit } from '../../models/activiteit/activiteit.model';

/**
 * Generated class for the ActiviteitenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activiteiten',
  templateUrl: 'activiteiten.html',
})
export class ActiviteitenPage {

  activiteitenList$: Observable<Activiteit[]>

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private activiteiten: ActiviteitenListService
  ) {

    this.activiteitenList$ = this.activiteiten
    .getActiviteitenList() // DB list
    .snapshotChanges() // key & value
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, 
          ...c.payload.val(),
        }));
      });
  }

}
