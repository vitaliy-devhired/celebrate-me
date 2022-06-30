import { NgModule,OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';



import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

//components

import {LoginComponent} from '../components/login/login.component';
import {EventsComponent} from '../components/events/events.component';
import {GiftComponent} from '../components/gift/gift.component';
import {GiftFilledComponent} from '../components/gift-filled/gift-filled.component';
import {OnboardingComponent} from '../components/onboarding/onboarding.component';


//

import {FormProvider,ServiceApi} from "./../providers/services";


@NgModule({
  declarations: [AppComponent,LoginComponent,EventsComponent,GiftComponent,GiftFilledComponent,OnboardingComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },FormProvider,ServiceApi],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {

  ngOnInit() {}

  //   alert('ngOnInit');

  //   document.addEventListener("deviceready", onDeviceReady, false);
  //       function onDeviceReady() {
  //          alert(device.platform);
  //       }
  // }

}
