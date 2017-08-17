import { Component,OnInit } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { appApi } from '../../../app/service/appApi';

@IonicPage()
@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage implements OnInit {
  carData:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private api: appApi,
    private app: App,
    private statusBar: StatusBar
  ) {}
  ngOnInit(): void {
    this.statusBar.styleBlackTranslucent();
  }
  ionViewDidLoad() {
    console.log(this.navParams.data.item.id);
    this.getCar({
      parentid:this.navParams.data.item.id
    });
  }
  getCar(param:any):void{
    this.api.getCar(param).subscribe(data => {
      this.carData = data.result;
      console.log(data);
    });
  }
}
