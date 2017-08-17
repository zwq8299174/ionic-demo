import { Component, OnInit,ViewChild} from '@angular/core';
import { App, NavController,ModalController,Navbar } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';

import {TestComponent}from './test';


@Component({
  selector: 'user-page',
  templateUrl: 'user.html'
})
export class UserCenterPage implements OnInit {
  @ViewChild(Navbar) navBar: Navbar;
  userName: string = 'tH3 Mo!e';
  user:any;
  constructor(
    public navCtrl: NavController,
    private app: App,
    private storage: Storage,
    private modalCtrl: ModalController
  ) {}
  ngOnInit(): void {
    console.log(this.navBar);
    this.navBar.hideBackButton = true;
  }
  // ionViewCanEnter(): boolean{
  //   console.log(this.navCtrl.parent.getSelected());
  //   this.storage.get('user').then((val) => {
  //     console.log(this.user);
  //     this.user = val;
  //   });
  //   let LoginModal = this.modalCtrl.create(LoginPage);
  //   if(this.user==undefined){
  //     LoginModal.present();
  //     return false;
  //   }else{
  //     return true;
  //   }
  // }
  login():void{
    this.app.getRootNav().push(LoginPage,{
      id: '123'
    });
    // this.navCtrl.push(LoginPage);
  }
  goTest(e:any):void{
    console.log(e);
    this.navCtrl.push(TestComponent);
  }
  logout():void{
    this.navCtrl.push(LoginPage);
    this.storage.set('user',undefined);
  }
}
