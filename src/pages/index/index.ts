import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


import { Storage } from '@ionic/storage';

@Component({
  selector: 'index-page',
  templateUrl: 'index.html'
})
export class IndexPage implements OnInit {
  logText:string;
  base64Image:string;
  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private barcodeScanner: BarcodeScanner,
    private storage: Storage
  ) {}
  ngOnInit(): void {
    
  }
  getPic(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {});
  }
  scanner(){
    this.barcodeScanner.scan().then((barcodeData) => {
      this.logText = JSON.stringify(barcodeData);
    }, (err) => {
        // An error occurred
    });
  }
}
