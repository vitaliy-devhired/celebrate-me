import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {LoginComponent} from '../components/login/login.component';
import {EventsComponent} from '../components/events/events.component';
import {GiftComponent} from '../components/gift/gift.component';
import {GiftFilledComponent} from '../components/gift-filled/gift-filled.component';
import {OnboardingComponent} from '../components/onboarding/onboarding.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'events', component: EventsComponent },
  { path: 'gift', component: GiftComponent },
  { path: 'giftfilled', component: GiftFilledComponent },
  { path: 'onboarding', component: OnboardingComponent }

  
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
