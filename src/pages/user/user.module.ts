import { NgModule } from '@angular/core';
import { IonicPageModule,IonicModule } from 'ionic-angular';

import { MyApp } from '../../app/app.component';
import { UserCenterPage } from './user-center';
import { TestComponent } from './test';

@NgModule({
  declarations: [
    UserCenterPage,
    TestComponent
  ],
  imports: [
    IonicPageModule.forChild(UserCenterPage),
    IonicModule.forRoot(MyApp,{},{
      links: [
        { component: TestComponent, name: 'Test', segment: 'test',defaultHistory: [UserCenterPage]  }
      ]
    })
  ],
  entryComponents: [
    UserCenterPage,
    TestComponent
  ]
})
export class UserModule {}
