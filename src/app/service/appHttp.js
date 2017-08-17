"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var baseUrl = 'http://api.jisuapi.com/car';
var appKey = 'c115b803134d35f2';
var appHttp = (function () {
    function appHttp(http) {
        this.http = http;
    }
    appHttp.prototype.request = function (url, opts) {
        console.log(opts);
        return this.http.request(url, new http_1.RequestOptions(opts))
            .map(function (res) {
            console.log(res);
            return res.json();
        });
    };
    ;
    appHttp.prototype.post = function (url, opts) {
        var params = new http_1.URLSearchParams();
        params.set('appkey', appKey);
        console.log(params);
        var body = JSON.stringify({
            appkey: appKey
        });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({
            body: body,
            headers: headers,
            method: 'post'
        });
        return this.request(baseUrl + url, Object.assign(options, opts));
    };
    ;
    appHttp.prototype.get = function (url, opts) {
        console.log(opts);
        var params = new http_1.URLSearchParams();
        params.set('appkey', appKey);
        var body = {
            search: params
        };
        console.log(params);
        return this.request(baseUrl + url, Object.assign(body, opts));
    };
    ;
    return appHttp;
}());
appHttp = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], appHttp);
exports.appHttp = appHttp;
//# sourceMappingURL=appHttp.js.map