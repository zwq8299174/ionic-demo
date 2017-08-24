import { Component, OnInit, ViewChild, ElementRef,Inject, Injectable,Renderer2 } from '@angular/core';
import { NavController,Slides,Header } from 'ionic-angular';
import { DOCUMENT } from '@angular/platform-browser';



import { Contacts, ContactFindOptions, ContactFieldType } from '@ionic-native/contacts';

@Injectable()
@Component({
  selector: 'discover-page',
  templateUrl: 'discover.html'
})
export class DiscoverPage implements OnInit {
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Header) header: Header;
  @ViewChild('wrapper') wrapper: ElementRef;
  formatContacts: any = [];
  contactsObj: any;
  stop:any =  (e) => {
    e.preventDefault();
  };
  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer2: Renderer2,
    public navCtrl: NavController,
    private contacts: Contacts
  ) {}
  ngOnInit(): void {
    console.log(this.header);
    this.slides.freeMode = true;
    this.slides.roundLengths = true;
    //this.document.addEventListener('touchmove', this.stop, false);
    //this.getAllContacts();
    this.setHeight();
  }
  ionViewWillLeave(): void {
    //this.document.removeEventListener('touchmove', this.stop, false);
  }
  setHeight():void {
    //let height = this.window.innerHeight - this.header._elementRef.nativeElement.offsetHeight - 54;

  }
  getAllContacts(): void {
    console.log('getAllContacts');
    if (this.formatContacts.length === 0) {
      let options: any = new ContactFindOptions();
      let fields: ContactFieldType[];
      fields = ['displayName', 'phoneNumbers'];
      options.filter = '';
      options.multiple = true;
      options.hasPhoneNumber = true;
      this.contacts.find(fields, options).then((result) => {
        // this.onSuccess(result, this);
        this.contactsObj = JSON.stringify(result);
      });
    }
  }
}
