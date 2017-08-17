import { Component, OnInit } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';

import { appApi } from '../../../app/service/appApi';

@IonicPage()
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
    private api: appApi,
    private app: App
  ) {}
  ngOnInit(): void {
    this.brand = this.navParams.data.item;
    this.getSerie({
      parentid:this.brand.id
    });
  }
  getSerie(param:any):void{
    this.api.getSerie(param).subscribe(data => {
      this.serieData = data.result;
      console.log(data);
    });
  }
  goCasrs(item):void{
    this.app.getRootNav().push('CarPage',{
      item: item
    });
  }
}
