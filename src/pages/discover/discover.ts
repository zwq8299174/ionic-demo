import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

import {Contacts, ContactFindOptions, ContactFieldType  } from '@ionic-native/contacts';

@Component({
  selector: 'discover-page7',
  templateUrl: 'discover.html'
})
export class DiscoverPage implements OnInit {
  formatContacts: any = [];
  contactsObj:any;
  constructor(
    public navCtrl: NavController,
    private contacts: Contacts) {
  }
  ngOnInit(): void {
    this.getAllContacts();
  }
  getAllContacts(): void{
    console.log('getAllContacts');
    if (this.formatContacts.length === 0) {
      let options:any = new ContactFindOptions();
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
