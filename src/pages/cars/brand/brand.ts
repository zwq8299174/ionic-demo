import { Component, OnInit } from '@angular/core';
import { App, NavController, LoadingController } from 'ionic-angular';

import { appApi } from '../../../app/service/appApi';

import { Keyboard } from '@ionic-native/keyboard';

import { SeriePage } from '../serie/serie';

@Component({
	selector: 'page-brand',
	templateUrl: 'brand.html'
})
export class BrandPage implements OnInit {
	private brandData: any;
	list: any;
	pageNum: number = 1;
	pageSize: number = 20;
	pageTotal: number;
	loadingText: string = '加载更多';
	noMore: boolean = false;
	searchCar: string = '';
	searchBarState: string = 'out';
	constructor(
		public navCtrl: NavController,
		private app: App,
		private keyboard: Keyboard,
		private api: appApi,
		private loadingCtrl: LoadingController) {
	}
	getCar() {
		let loading = this.loadingCtrl.create({
			content: '加载中...'
		});
		loading.present();
		this.api.getBrand().subscribe(data => {
			this.list = data.result;
			this.brandData = this.list.slice(0, this.pageSize - 1);
			this.pageTotal = Math.ceil(data.result.length / this.pageSize);
			setTimeout(() => {
				loading.dismiss();
			}, 500);
			this.pageNum++;
		});
	}
	ngOnInit(): void {
		this.getCar();
	}
	onInput(): void {
		let inputModel = {
			

		}
	}
	onCancel(): void {
		this.searchBarState = 'out';
		this.keyboard.close();
	}
	showSearchbar(): void {
		this.searchBarState = 'in';
		this.keyboard.show();
		console.log(666);
	}
	carsShow(item: any): boolean {
		return this.searchCar == '' || this.searchCar != '' && (this.searchCar == item.initial || this.searchCar == item.initial.toLowerCase() || item.name.indexOf(this.searchCar) > -1);
	}
	doRefresh(refresher) {
		console.log('Begin async operation', refresher);

		setTimeout(() => {
			let start: number = Math.floor(Math.random() * (this.list.length - this.pageSize));
			this.brandData = this.list.slice(start, start + this.pageSize).concat(this.brandData);
			refresher.complete();
		}, 2000);
	}
	doInfinite(): Promise<any> {
		console.log('Begin async operation');
		console.log(this.pageNum);
		let result: any = new Promise((resolve) => {
			setTimeout(() => {
				this.brandData = this.brandData.concat(this.list.slice(this.pageNum * this.pageSize, (this.pageNum + 1) * this.pageSize - 1));
				console.log(this.brandData);
				this.pageNum++;
				resolve();
			}, 500);
		});
		if (this.pageNum <= this.pageTotal) {
			return result;
		} else {
			return new Promise((resolve) => {
				this.noMore = true;
				this.loadingText = '没有更多了';
				resolve();
			});
		}
	}
	goSerie(item): void {
		this.app.getRootNav().push(SeriePage, {
			item: item
		});
	}
}
