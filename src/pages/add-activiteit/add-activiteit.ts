import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Activiteit } from '../../models/activiteit/activiteit.model';
import { ActiviteitenListService } from '../../services/activiteiten-list/activiteiten-list.service';
import { ToastService } from '../../services/toast/toast.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Observable } from 'rxjs/Observable'
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
    correctOrientation: true,
    targetHeight:600,
    targetWidth:600
  }

  readonly options2: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit: true,
    correctOrientation: true,
    targetHeight: 600,
    targetWidth: 600,
    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM 
  }

  activiteit: Activiteit = {
    titel:'',
    beschrijving:'',
    image:''
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
    this.stores = this.db.getAll();

    this.stores.subscribe((result) => {
      console.log("got this data from provider", result);
    }, (error) => {
      console.log("Didn't get any data", error);
    })
  }

  takePicture() {
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      
      let store ={
        imageData:base64Image
      }

      this.activiteit.image = store
    }, (err) => {
      this.toast.show(`foto nemen niet mogelijk`);
    });
  }

  addActiviteit(activiteit: Activiteit) {
    if (this.activiteit.titel == '' ||
    this.activiteit.beschrijving =='')
    {
      this.toast.show('Vul alle velden in');
    }
    else{
    this.activiteiten.addActiviteit(activiteit).then(ref => {
      this.toast.show(`${activiteit.titel} toegevoegd!`);
      this.navCtrl.setRoot('ActiviteitenPage', { key: ref.key}) 
    });
  }
}
}
