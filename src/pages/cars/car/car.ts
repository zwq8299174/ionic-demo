import { Component, ViewChild, ElementRef, Renderer2, OnInit, NgZone } from '@angular/core';
import { App, IonicPage, NavController, NavParams, LoadingController, Header, Content } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { appApi } from '../../../app/service/appApi';

@Component({
  selector: 'page-car',
  templateUrl: 'car.html'
})
export class CarPage implements OnInit {
  @ViewChild('yearWrapper') wrapper: ElementRef;
  @ViewChild(Content) content: Content;
  @ViewChild(Header) header: Header;
  wrapperWidth: number = 0;
  years: any[] = [];
  carData: any;
  condition: any = {
    salestate: '在销'
  };
  headerDeep: boolean = false;
  activeIndex: number = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private renderer2: Renderer2,
    private api: appApi,
    private app: App,
    private ngZone: NgZone,
    private statusBar: StatusBar,
    private loadingCtrl: LoadingController
  ) { }
  ngOnInit(): void {
    this.statusBar.styleBlackTranslucent();
    this.getCar({
      parentid: this.navParams.data.item.id
    });
    console.log(this.header);
    this.docScroll();
  }
  ionViewWillLeave(): void {
    this.statusBar.styleDefault();
  }
  docScroll(): void {
    console.log(this.content);
    this.content.ionScrollEnd.subscribe((e: any) => {
      this.ngZone.run(() => {
        if (e.scrollTop > this.header._elementRef.nativeElement.offsetHeight) {
          this.headerDeep = true;
          this.statusBar.styleDefault();
        } else {
          this.headerDeep = false;
          this.statusBar.styleBlackTranslucent();
        }
      });
    })
  }
  getCar(param: any): void {
    let loading = this.loadingCtrl.create({
      content: '加载中...'
    });
    loading.present();
    this.api.getCar(param).subscribe(data => {
      this.carData = data.result;
      this.carData.list.sort((a, b) => {
        return parseInt(a.yeartype) - parseInt(b.yeartype);
      }).reverse();
      console.log(this.carData.list);
      this.getYears(this.carData.list);
      setTimeout(() => {
        loading.dismiss();
      }, 500);
    });
  }
  setWidth(): void {
    let child: any = this.wrapper.nativeElement.children;
    console.log(child);
    for (let item in child) {
      if (Number(item) >= 0) {
        this.wrapperWidth += (child[item].offsetWidth + 0.5);
      }
    };
    this.wrapperWidth += 20;
    this.renderer2.setStyle(this.wrapper.nativeElement, 'width', this.wrapperWidth + 'px');
    console.log(this.wrapperWidth);
  }
  getYears(data: any[]): void {
    let year = 0;
    data.forEach((e) => {
      let tmpYear = parseInt(e.yeartype);
      if (tmpYear != year) {
        year = tmpYear;
        if (this.years.indexOf(year) == -1) {
          this.years.push(year);
        }
      }
    });
    this.years.sort().reverse();
    this.years.unshift('全部在售');
    console.log(this.years);
    setTimeout(() => {
      this.setWidth();
    }, 100);
  }
  getYear(item): string {
    return typeof item === 'number' ? item + '款' : item;
  }
  yearClick(item, index): void {
    this.activeIndex = index;
    console.log(item);
    if (typeof item == 'number') {
      this.condition = {
        yeartype: item
      };
    } else {
      this.condition = {
        salestate: '在销'
      };
    }
  }
  carShow(item): boolean {
    let name: string, val: string;
    for (let tmp in this.condition) {
      name = tmp;
      val = this.condition[tmp];
    };
    return item[name] == val ? false : true;
  };
}
