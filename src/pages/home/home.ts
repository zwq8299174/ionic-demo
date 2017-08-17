import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IndexPage } from '../index/index';
import { BrandPage } from '../cars/brand/brand';
import { DiscoverPage } from '../discover/discover';
import { UserCenterPage } from '../user/user-center';
import { LoginPage } from '../login/login';


import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root: any = IndexPage;
  tab2Root: any = BrandPage;
  tab3Root: any = DiscoverPage;
  tab4Root: any = '';
  userParams: any = {
    from:''
  };
  constructor(
    public navCtrl: NavController,
    private storage :Storage
  ) {}
  ionViewDidLoad():void{
    this.storage.get('user').then((val) => {
      console.log(val);
      if(val==undefined){
        this.userParams.from = UserCenterPage;
        this.tab4Root = LoginPage;
      }else{
        this.tab4Root = UserCenterPage;
      }
    });
  }
}
