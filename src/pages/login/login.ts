import { Component,OnInit,ViewChild} from '@angular/core';
import { App,NavController,Navbar,ViewController,NavParams} from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { appApi } from '../../app/service/appApi';

import {IndexPage} from '../index/index';
import {SignupPage} from '../signup/signup';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  @ViewChild(Navbar) navBar: Navbar;
  list:any;
  cars:any;
  Ctrl:any;
  backBtn:boolean;
  constructor(
    public navCtrl: NavController,
    private api: appApi,
    private viewCtrl: ViewController,
    private storage: Storage,
    private app:App,
    private navParams:NavParams
  ) {}
  ngOnInit(): void {
    this.storage.get('navCtrl').then((val) => {
      console.log(val);
      this.Ctrl = val;
    });
    this.navBar._backText = '我的';
    console.log(this.navParams.data.from);
    if(this.navParams.data.from!=undefined){
      this.backBtn = true;
      console.log(666);
    }else{
      this.backBtn = false;
      console.log(777);
    }
  }
  ionViewLoaded():void {
    this.getCar();
  }
  getCar() {
    this.api.getBrand().subscribe(data => {
      this.list = data.result;
    });
  }
  signup():void{
    this.navCtrl.push(SignupPage);
  }
  cancel():void{
    this.viewCtrl.dismiss();
  }
  login():void{
    this.storage.set('user','CGfgtrrtvj98766TYB');
    this.navCtrl.push(this.navParams.data.from,null,{
      animation:'wp-transition'
    });
  }
  logout():void{
    this.storage.set('user',undefined);
  }
}
