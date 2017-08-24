import { Component, OnInit } from '@angular/core';
import { App,NavController, NavParams,LoadingController } from 'ionic-angular';

import { appApi } from '../../../app/service/appApi';

import {CarPage} from '../car/car';

@Component({
  selector: 'page-serie',
  templateUrl: 'serie.html',
})
export class SeriePage implements OnInit {
  serieData:any;
  brand:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: App,
    private api: appApi,
    private loadingCtrl: LoadingController
  ) {}
  ngOnInit(): void {
    this.brand = this.navParams.data.item;
    this.getSerie({
      parentid:this.brand.id
    });
  }
  getSerie(param:any):void{
    let loading = this.loadingCtrl.create({
      content: '加载中...'
    });
    loading.present();
    this.api.getSerie(param).subscribe(data => {
      this.serieData = data.result;
      console.log(data);
      setTimeout(() => {
        loading.dismiss();
      }, 500);
    });
  }
  goCasrs(item):void{
    this.app.getRootNav().push(CarPage,{
      item: item
    });
  }
}
