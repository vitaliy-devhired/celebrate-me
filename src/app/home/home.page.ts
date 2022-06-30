import { Component } from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {FormProvider,ServiceApi} from "../../providers/services";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends FormProvider  {

  protected user: FormGroup;
  
  constructor(
    public api : ServiceApi,
    builder : FormBuilder
  ) {
    super();

    this.user = builder.group({
      'email' : new FormControl('', [Validators.required]),
      'password'  :new FormControl('', [Validators.required]),

    });
  }

  getRawValue() {
    let values = {};

    let raw = this.user.getRawValue();
    let keys = Object.keys(raw);
    for (let k of keys) {
        values[k] = '';
        if (raw[k]) {
            values[k] = raw[k];
        }
    }
    return values;
}

  async onLogin() {
    
    this.errors = {};
    let form = this.user;
    this.isSubmit = true;

    if (!form.valid) {
      return false;
    }

    let userData = this.getRawValue();

    console.log('this.getRawValue()');
    console.log(this.getRawValue());

    let data = await this.api.login(userData['email'],userData['password']).toPromise();;
    if (data['token']){
      alert('token: ' + data['token']);
    }
    
  }


}
