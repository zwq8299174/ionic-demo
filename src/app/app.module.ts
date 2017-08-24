//Angular
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

//Ionic & Ionic Native
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Keyboard } from '@ionic-native/keyboard';
import { Contacts } from '@ionic-native/contacts';


//Custom service
import { appHttp } from './service/appHttp';
import { appApi } from './service/appApi';

//Custom Module
import { CarsModule } from '../pages/cars/cars.module';
import { UserModule } from '../pages/user/user.module';

//Pages
import { MyApp } from './app.component';
import { IndexPage } from '../pages/index/index';
import { DiscoverPage } from '../pages/discover/discover';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

//Components
import { ComponentsModule } from '../components/components.module';
import { AppServeiceProvider } from '../providers/app-serveice/app-serveice';


@NgModule({
  declarations: [
    MyApp,
    IndexPage,
    DiscoverPage,
    HomePage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{
      backButtonText: '返回'
    }),
    ComponentsModule,
    CarsModule,
    UserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IndexPage,
    DiscoverPage,
    HomePage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Contacts,
    Camera,
    BarcodeScanner,
    Keyboard,
    appHttp,
    appApi,
    { provide: 'Window',  useValue: window },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AppServeiceProvider
  ]
})
export class AppModule { }
