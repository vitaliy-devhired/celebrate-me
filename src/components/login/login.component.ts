import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {Storage} from '@ionic/storage';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FormProvider,ServiceApi} from "../../providers/services";

import openwith from '../../../node_modules/cc.fovea.cordova.openwith/www/openwith';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  extends FormProvider  {

  protected user: FormGroup;
  protected openwith : any;
  
  constructor(
    public api : ServiceApi,
    builder : FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    protected storage: Storage
  ) {
    super();
    this.user = builder.group({
      'email' : new FormControl('', [Validators.required]),
      'password'  :new FormControl('', [Validators.required]),

    });

    if(window.cordova){

      alert('cordova');

      this.openwith = openwith;

      this.openwith.init(this.initSuccess, this.initError);
      this.openwith.addHandler(this.myHandler);
    }

  }

  ///

  initSuccess()  { alert('init success!'); }
  initError(err) { alert('init failed: ' + err); }

  myHandler(intent) {
    console.log('intent received');

    console.log('  action: ' + intent.action); // type of action requested by the user
    console.log('  exit: ' + intent.exit); // if true, you should exit the app after processing

    for (var i = 0; i < intent.items.length; ++i) {
      var item = intent.items[i];
      console.log('  type: ', item.type);   // mime type
      console.log('  uri:  ', item.uri);     // uri to the file, probably NOT a web uri

      // some optional additional info
      console.log('  text: ', item.text);   // text to share alongside the item, iOS only
      console.log('  name: ', item.name);   // suggested name of the image, iOS 11+ only
      console.log('  utis: ', item.utis);
      console.log('  path: ', item.path);   // path on the device, generally undefined
    }

  }


  ///

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

    location.reload();
    
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
      //alert('token: ' + data['token']);
      this.storage.set('auth-token',data['token'] );
      this.router.navigate(["/onboarding"]);
    }
    
  }

}
