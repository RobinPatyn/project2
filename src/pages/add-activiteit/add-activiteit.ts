import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Activiteit } from '../../models/activiteit/activiteit.model';
import { ActiviteitenListService } from '../../services/activiteiten-list/activiteiten-list.service';
import { ToastService } from '../../services/toast/toast.service';
import { Observable } from 'rxjs/Observable';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';

/**
 * Generated class for the AddActiviteitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-activiteit',
  templateUrl: 'add-activiteit.html',
})
export class AddActiviteitPage {

  stores: Observable<any[]>;
  avatarData="";

  readonly options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit:true,
    targetHeight:250,
    targetWidth:250
  }

  activiteit: Activiteit = {
    titel:'',
    beschrijving:''
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private activiteiten: ActiviteitenListService,
    private toast: ToastService,
    private db: FireDataServiceProvider,
    private camera: Camera
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddActiviteitPage');
  }

  takePicture() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      
      let store ={
        imageData:base64Image
      }
      this.db.update("0",store);
    }, (err) => {
      // Handle error
    });
  }  

  addActiviteit(activiteit: Activiteit) {
    this.activiteiten.addActiviteit(activiteit).then(ref => {
      this.toast.show(`${activiteit.titel} toegevoegd!`);
      this.navCtrl.setRoot('ActiviteitenPage', { key: ref.key}) 
    });
  }

}
