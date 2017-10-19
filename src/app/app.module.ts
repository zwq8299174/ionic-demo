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
import { Vibration } from '@ionic-native/vibration';


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
import { AlphaScrollPage } from '../pages/alpha-scroll/alpha-scroll';

//Modules
import { ComponentsModule } from '../components/components.module';
import { AppServeiceProviderModule } from '../providers/app-serveice';
import { AlphaScrollModule } from '../modules/alpha-scroll.module';
import { PipesModule } from '../pipes/pipes.module';

//providers
import { ListData } from '../providers/list-data';

@NgModule({
  declarations: [
    MyApp,
    IndexPage,
    DiscoverPage,
    HomePage,
    LoginPage,
    SignupPage,
    AlphaScrollPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    AlphaScrollModule.forRoot(),
    PipesModule.forRoot(),
    AppServeiceProviderModule,
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
    SignupPage,
    AlphaScrollPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Contacts,
    Camera,
    BarcodeScanner,
    Keyboard,
    Vibration,
    appHttp,
    appApi,
    ListData,
    { provide: 'Window',  useValue: window },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
