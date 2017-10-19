import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { ListData } from '../../providers/list-data';

import { appApi } from '../../app/service/appApi';


@Component({
	selector: 'page-alpha-scroll',
	templateUrl: 'alpha-scroll.html',
})
export class AlphaScrollPage {
	private brandData: any;
	breeds: Array<any> = [];
	currentPageClass = this;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private api: appApi,
		private loadingCtrl: LoadingController,
		private listData: ListData
	) {
		// this.listData.list().then(data => {
		// 	this.breeds = data;
		// 	console.log(this.breeds);
		// 	console.log(this.listData);
		// });
	}
	onItemClick(item) {
		console.log(item);
	}
	ngOnInit(): void {
		this.getCar();
		console.log(this.breeds);
		// setTimeout(()=>{
		// 	this.listData.list().then(data => {
		// 		this.breeds = data;
		// 		console.log(this.breeds);
		// 		console.log(this.listData);
		// 	});
		// },1000);
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad AlphaScrollPage');
	}
	getCar() {
		let loading = this.loadingCtrl.create({
			content: '加载中...'
		});
		loading.present();
		this.api.getBrand().subscribe(data => {
			this.breeds = data.result;
			console.log(this.breeds);
			setTimeout(() => {
				loading.dismiss();
			}, 500);
		});
	}
}
