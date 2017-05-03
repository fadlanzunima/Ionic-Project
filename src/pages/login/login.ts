import { Component } from '@angular/core';
import { NavController,AlertController, ActionSheetController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  siswa : FirebaseListObservable<any>;
   public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  constructor(public navCtrl: NavController,public alertCtrl: AlertController, 
  public af: AngularFire, public actionSheetCtrl: ActionSheetController, public navParams: NavParams)
  {
    this.siswa = af.database.list('/siswa');
  }

  regisSiswa(nama_depan,nama_belakang,event,asal_sekolah,email,pasw){
    this.siswa.push({
      nama_depan : nama_depan,
      nama_belakang : nama_belakang,
      event : event,
      asal_sekolah : asal_sekolah,
      email : email,
      pasw : pasw
    }).then( newSiswa =>{
      this.navCtrl.pop();
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
