import { Injectable } from '@angular/core';
import { appHttp } from './appHttp';


@Injectable()
export class appApi{
	constructor(private _http: appHttp) {}
	getBrand(){
		return this._http.get('/brand');
	}
	getSerie(param : any){
		return this._http.get('/type',param);
	}
	getCar(param : any){
		return this._http.get('/car',param);
	}
}
