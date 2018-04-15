import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActiviteitDetailPage } from './activiteit-detail';

@NgModule({
  declarations: [
    ActiviteitDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ActiviteitDetailPage),
  ],
})
export class ActiviteitDetailPageModule {}
