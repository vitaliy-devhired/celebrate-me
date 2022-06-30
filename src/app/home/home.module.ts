import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { HttpClientModule } from '@angular/common/http';

import {FormProvider,ServiceApi} from "../../providers/services";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [FormProvider,ServiceApi],
  declarations: [HomePage]
})
export class HomePageModule {}
