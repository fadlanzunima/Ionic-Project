import { Component } from '@angular/core';
import { NavController , AlertController, ActionSheetController} from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { LoginPage } from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  siswa: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController, af: AngularFire, public actionSheetCtrl: ActionSheetController ) {
      this.siswa = af.database.list('/siswa');
  }
 
 regisSiswa(){
     this.navCtrl.push(LoginPage);
 }

}

