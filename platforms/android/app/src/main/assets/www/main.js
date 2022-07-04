(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/login/login.component */ 5220);
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/events/events.component */ 6162);
/* harmony import */ var _components_gift_gift_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/gift/gift.component */ 9477);
/* harmony import */ var _components_gift_filled_gift_filled_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/gift-filled/gift-filled.component */ 6428);
/* harmony import */ var _components_onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/onboarding/onboarding.component */ 6008);








const routes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    { path: 'events', component: _components_events_events_component__WEBPACK_IMPORTED_MODULE_1__.EventsComponent },
    { path: 'gift', component: _components_gift_gift_component__WEBPACK_IMPORTED_MODULE_2__.GiftComponent },
    { path: 'giftfilled', component: _components_gift_filled_gift_filled_component__WEBPACK_IMPORTED_MODULE_3__.GiftFilledComponent },
    { path: 'onboarding', component: _components_onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_4__.OnboardingComponent }
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
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_7__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/login/login.component */ 5220);
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/events/events.component */ 6162);
/* harmony import */ var _components_gift_gift_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/gift/gift.component */ 9477);
/* harmony import */ var _components_gift_filled_gift_filled_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/gift-filled/gift-filled.component */ 6428);
/* harmony import */ var _components_onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/onboarding/onboarding.component */ 6008);
/* harmony import */ var _providers_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../providers/services */ 6619);












//components





//

let AppModule = class AppModule {
    ngOnInit() { }
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _components_events_events_component__WEBPACK_IMPORTED_MODULE_4__.EventsComponent, _components_gift_gift_component__WEBPACK_IMPORTED_MODULE_5__.GiftComponent, _components_gift_filled_gift_filled_component__WEBPACK_IMPORTED_MODULE_6__.GiftFilledComponent, _components_onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_7__.OnboardingComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy }, _providers_services__WEBPACK_IMPORTED_MODULE_8__.FormProvider, _providers_services__WEBPACK_IMPORTED_MODULE_8__.ServiceApi, _ionic_storage__WEBPACK_IMPORTED_MODULE_1__.Storage],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 6162:
/*!***************************************************!*\
  !*** ./src/components/events/events.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsComponent": () => (/* binding */ EventsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _events_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.component.html?ngResource */ 8109);
/* harmony import */ var _events_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.component.scss?ngResource */ 8186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let EventsComponent = class EventsComponent {
    constructor() { }
    ngOnInit() { }
};
EventsComponent.ctorParameters = () => [];
EventsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-events',
        template: _events_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_events_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventsComponent);



/***/ }),

/***/ 6428:
/*!*************************************************************!*\
  !*** ./src/components/gift-filled/gift-filled.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftFilledComponent": () => (/* binding */ GiftFilledComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _gift_filled_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gift-filled.component.html?ngResource */ 3851);
/* harmony import */ var _gift_filled_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gift-filled.component.scss?ngResource */ 5379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let GiftFilledComponent = class GiftFilledComponent {
    constructor() { }
    ngOnInit() { }
};
GiftFilledComponent.ctorParameters = () => [];
GiftFilledComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-gift-filled',
        template: _gift_filled_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_gift_filled_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GiftFilledComponent);



/***/ }),

/***/ 9477:
/*!***********************************************!*\
  !*** ./src/components/gift/gift.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftComponent": () => (/* binding */ GiftComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _gift_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gift.component.html?ngResource */ 8530);
/* harmony import */ var _gift_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gift.component.scss?ngResource */ 6700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let GiftComponent = class GiftComponent {
    constructor() { }
    ngOnInit() { }
};
GiftComponent.ctorParameters = () => [];
GiftComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-gift',
        template: _gift_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_gift_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GiftComponent);



/***/ }),

/***/ 5220:
/*!*************************************************!*\
  !*** ./src/components/login/login.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _Users_vitalijponomarenko_Documents_android_celebrate_me_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.html?ngResource */ 1511);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 6862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _providers_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/services */ 6619);
/* harmony import */ var _node_modules_cc_fovea_cordova_openwith_www_openwith__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/cc.fovea.cordova.openwith/www/openwith */ 1406);
/* harmony import */ var _node_modules_cc_fovea_cordova_openwith_www_openwith__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_cc_fovea_cordova_openwith_www_openwith__WEBPACK_IMPORTED_MODULE_5__);










let LoginComponent = class LoginComponent extends _providers_services__WEBPACK_IMPORTED_MODULE_4__.FormProvider {
  constructor(api, builder, route, router, storage) {
    super();
    this.api = api;
    this.route = route;
    this.router = router;
    this.storage = storage;
    this.user = builder.group({
      'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
    });

    if (window.cordova) {
      alert('cordova');
      this.openwith = (_node_modules_cc_fovea_cordova_openwith_www_openwith__WEBPACK_IMPORTED_MODULE_5___default());
      this.openwith.init(this.initSuccess, this.initError);
      this.openwith.addHandler(this.myHandler);
    }
  } ///


  initSuccess() {
    alert('init success!');
  }

  initError(err) {
    alert('init failed: ' + err);
  }

  myHandler(intent) {
    console.log('intent received');
    console.log('  action: ' + intent.action); // type of action requested by the user

    console.log('  exit: ' + intent.exit); // if true, you should exit the app after processing

    for (var i = 0; i < intent.items.length; ++i) {
      var item = intent.items[i];
      console.log('  type: ', item.type); // mime type

      console.log('  uri:  ', item.uri); // uri to the file, probably NOT a web uri
      // some optional additional info

      console.log('  text: ', item.text); // text to share alongside the item, iOS only

      console.log('  name: ', item.name); // suggested name of the image, iOS 11+ only

      console.log('  utis: ', item.utis);
      console.log('  path: ', item.path); // path on the device, generally undefined
    }
  } ///


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

  onLogin() {
    var _this = this;

    return (0,_Users_vitalijponomarenko_Documents_android_celebrate_me_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      location.reload();
      _this.errors = {};
      let form = _this.user;
      _this.isSubmit = true;

      if (!form.valid) {
        return false;
      }

      let userData = _this.getRawValue();

      console.log('this.getRawValue()');
      console.log(_this.getRawValue());
      let data = yield _this.api.login(userData['email'], userData['password']).toPromise();
      ;

      if (data['token']) {
        //alert('token: ' + data['token']);
        _this.storage.set('auth-token', data['token']);

        _this.router.navigate(["/onboarding"]);
      }
    })();
  }

};

LoginComponent.ctorParameters = () => [{
  type: _providers_services__WEBPACK_IMPORTED_MODULE_4__.ServiceApi
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage
}];

LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-login',
  template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginComponent);


/***/ }),

/***/ 6008:
/*!***********************************************************!*\
  !*** ./src/components/onboarding/onboarding.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingComponent": () => (/* binding */ OnboardingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _onboarding_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding.component.html?ngResource */ 4151);
/* harmony import */ var _onboarding_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding.component.scss?ngResource */ 7402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let OnboardingComponent = class OnboardingComponent {
    constructor() { }
    ngOnInit() { }
};
OnboardingComponent.ctorParameters = () => [];
OnboardingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-onboarding',
        template: _onboarding_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_onboarding_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OnboardingComponent);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
//platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
const bootstrap = () => {
    (0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);
};
if (typeof window['cordova'] !== 'undefined') {
    document.addEventListener('deviceready', () => {
        bootstrap();
    }, false);
}
else {
    bootstrap();
}


/***/ }),

/***/ 1878:
/*!*******************************!*\
  !*** ./src/providers/form.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormProvider": () => (/* binding */ FormProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ 9464);




let FormProvider = class FormProvider {
    constructor() {
        this.isSubmit = false;
        this.errors = {};
        // using messages list
        this.messages = {
            'required': 'This is required field.',
            'email': 'Email is not valid',
            'minlength': 'Password must be at least 4 characters long.',
            'notEquivalent': 'Password is not equal'
        };
    }
    /**
     *
     * @param FormControl control
     *
     * @returns {boolean}
     */
    checkError(control) {
        if (control.valid) {
            return false;
        }
        if (control.untouched && this.isSubmit) {
            return true;
        }
        return control.touched;
    }
    /**
     *
     * @param FormGroup form
     * @param string name
     *
     * @returns {boolean}
     */
    isValidate(form, name) {
        let control = form.get(name);
        if (control.disabled == true) {
            return false;
        }
        let result = this.checkError(control);
        if (result) {
            let msg = [];
            for (let key in control.errors) {
                msg.push(this.messages[key]);
            }
            this.errors[name] = '<p>' + msg.join('</p><p>') + '</p>';
        }
        else {
            // clear previous error message (if any)
            this.errors[name] = '';
        }
        return result;
    }
    /**
     *
     * @param FormGroup form
     * @param string name
     *
     * @returns {boolean}
     */
    hasError(form, name) {
        let has = this.isValidate(form, name);
        if (this.isSubmit && has == false) {
            let errors = form.get(name).errors;
            if (errors) {
                has = !!Object.keys(errors).length;
            }
        }
        return has;
    }
    /**
     *
     * @param FormGroup form
     */
    onValueChanged(form) {
        for (let name in form.controls) {
            let field = form.get(name);
            if (field instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup) {
                this.onValueChanged(field);
            }
            else {
                this.hasError(form, name);
            }
        }
    }
};
FormProvider.ctorParameters = () => [];
FormProvider = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], FormProvider);



/***/ }),

/***/ 9387:
/*!**************************************!*\
  !*** ./src/providers/service.api.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceApi": () => (/* binding */ ServiceApi)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var ionic_angular_util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ionic-angular/util/util */ 9807);
/* harmony import */ var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/timeout */ 8937);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ 4781);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ 9464);







let ServiceApi = class ServiceApi {
    constructor(_http) {
        this._uri = 'https://dev.celebratemeregistry.com/api/';
        this._token = {};
        this._config = {};
        this.version = 'v1';
        this.http = _http;
    }
    set token(data) {
        this._token = data;
    }
    get token() {
        return this._token;
    }
    get uri() {
        return this._uri;
    }
    createQueryParams(a) {
        let prefix, name, output;
        let s = [];
        let r20 = /%20/g;
        let add = (key, value) => {
            // If value is a function, invoke it and return its value
            value = (typeof value == 'function') ? value() : (value == null ? "" : value);
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
        if ((0,ionic_angular_util_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(a)) {
            for (name in a) {
                add(name, a[name]);
            }
        }
        else {
            for (prefix in a) {
                this.buildParams(prefix, a[prefix], add);
            }
        }
        output = s.join("&").replace(r20, "+");
        return output;
    }
    ;
    buildParams(prefix, obj, add) {
        let name, i, l, rbracket;
        rbracket = /\[\]$/;
        if ((0,ionic_angular_util_util__WEBPACK_IMPORTED_MODULE_0__.isArray)(obj) || obj instanceof Array) {
            for (i = 0, l = obj.length; i < l; i++) {
                if (rbracket.test(prefix)) {
                    add(prefix, obj[i]);
                }
                else {
                    this.buildParams(prefix + "[" + (typeof obj[i] === "object" ? i : "") + "]", obj[i], add);
                }
            }
        }
        else if (typeof obj == "object") {
            // Serialize object item.
            for (name in obj) {
                this.buildParams(prefix + "[" + name + "]", obj[name], add);
            }
        }
        else {
            // Serialize scalar item.
            add(prefix, obj);
        }
    }
    buildRequest(method, path, params = {}, headers = {}) {
        let uri = this.uri + path;
        console.log('buildRequest - uri');
        console.log(uri);
        headers = Object.assign(headers, {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Cache-Control': 'no-cache',
            'Access-Control-Expose-Headers': 'Access-Control-*',
            'Access-Control-Allow-Headers': 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept,X-Request-With',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'false'
        });
        let options = {
            'headers': new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders(headers)
        };
        method = method.toLocaleUpperCase();
        if (method == 'POST') {
            return this.http.post(uri, JSON.stringify(params), options);
        }
        if (method == 'POST_MULTIPART') {
            return this.http.post(uri, params, options);
        }
        if (method == 'PUT') {
            return this.http.put(uri, JSON.stringify(params), options);
        }
        if (params) {
            uri = uri + '?' + this.createQueryParams(params);
        }
        if (method == 'DELETE') {
            return this.http.delete(uri, options);
        }
        return this.http.get(uri, options);
    }
    hasInternet() {
        if (navigator.onLine == false) {
            return false;
        }
        return true;
    }
    request(method, path, params = {}, headers = {}) {
        return this.buildRequest(method, path, params, headers)
            .timeout(200000)
            // .map(data: any => data)
            .catch(err => {
            if (this.hasInternet() == false) {
                throw new String('No network connection');
            }
            // console.debug('Catch Error in service API: ', err);
            throw err;
        });
    }
    login(email, password) {
        return this.request('POST', this.version + '/login', {
            'email': email,
            'password': password
        });
    }
    logout() {
        return this.request('GET', this.version + '/logout', {}, {
            'Authorization': this._token['token']
        });
    }
    getRegistryList(params = []) {
        return this.request('POST', this.version + '/get-registry-list', params, {
            'Authorization': this._token['token']
        });
    }
    getProductList(params = []) {
        return this.request('POST', this.version + '/get-product-list', params, {
            'Authorization': this._token['token']
        });
    }
    getMetaDetail(params = []) {
        return this.request('POST', this.version + '/get-meta-detail', params, {
            'Authorization': this._token['token']
        });
    }
    saveProduct(params = []) {
        return this.request('POST', this.version + '/save-product', params, {
            'Authorization': this._token['token']
        });
    }
    ///
    getDemo(type, limit = 25, offset = 0, filter = []) {
        filter.push('type=' + type);
        return this.request('GET', 'getDemo', {
            'limit': limit,
            'skip': offset,
            'filter': filter,
        }, {
            'Authorization': this._token['token']
        });
    }
    postDemo(params = []) {
        return this.request('POST', 'postDemo', params, {
            'Authorization': this._token['token']
        });
    }
    putDemo(id, params = []) {
        return this.request('PUT', 'putDemo/' + id, params, {
            'Authorization': this._token['token']
        });
    }
    deleteDemo(id) {
        return this.request('DELETE', 'demo/' + id, {}, {
            'Authorization': this._token['token']
        });
    }
};
ServiceApi.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
ServiceApi = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], ServiceApi);



/***/ }),

/***/ 6619:
/*!***********************************!*\
  !*** ./src/providers/services.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppFunction": () => (/* binding */ AppFunction),
/* harmony export */   "AppLabels": () => (/* binding */ AppLabels),
/* harmony export */   "FormProvider": () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_1__.FormProvider),
/* harmony export */   "ServiceApi": () => (/* reexport safe */ _service_api__WEBPACK_IMPORTED_MODULE_0__.ServiceApi)
/* harmony export */ });
/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service.api */ 9387);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ 1878);


class AppLabels {
    static text(key) {
        if (AppLabels._labels[key]) {
            return AppLabels._labels[key];
        }
        return '';
    }
    static set(key, value) {
        AppLabels._labels[key] = value;
    }
}
AppLabels._labels = {
    // Form messages
    'form_is_not_submit': 'Sorry! Form is not submit.',
    // Form validation - application errors
    'min_length_6': 'Password must be at least 6 characters long.',
    // Form validation - default errors
    'required': 'This is required field.',
    'email': 'Email is not valid',
    'minlength': 'Password must be at least %chars characters long.',
    'notEquivalent': 'Password is not equal',
    'notMatch': 'These passwords do not match.',
    // Forgot string
    'forgot_reset_success': 'An e-mail has been been sent to you with a link to reset your password',
    'forgot_reset_error': 'Specified email address does not exist',
    // Application messages
    'application_login_error': 'Please insert credentials',
    'application_auth_error': 'Invalid login credential',
    'application_error': 'Sorry, Something wrong on application, please try again later.',
    'application_server_error': 'Something wrong on server, please try again later.',
    'password_was_change': 'Password successfully updated.',
    'password_was_not_change': 'Current password is invalid.',
    // Application user
    'user_changes_saved': 'Changes saved',
    'user_error_uploaded': 'Error while uploading file.',
    'user_successfully_uploaded': 'Image was successfully updated',
    'user_image_error_select': 'Error while selecting image.',
    'user_image_large': 'large image',
    'user_confirm_logout': 'Are you sure you want to logout?',
    'user_status_pending': 'Please add a valid license to your profile to be able to add photos and participate in discussions.',
    'error_email': 'User with such email already exists.',
};
class AppFunction {
    static label(key) {
        return AppLabels.text(key);
    }
}


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 8186:
/*!****************************************************************!*\
  !*** ./src/components/events/events.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudHMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 5379:
/*!**************************************************************************!*\
  !*** ./src/components/gift-filled/gift-filled.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnaWZ0LWZpbGxlZC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 6700:
/*!************************************************************!*\
  !*** ./src/components/gift/gift.component.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnaWZ0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 6862:
/*!**************************************************************!*\
  !*** ./src/components/login/login.component.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 7402:
/*!************************************************************************!*\
  !*** ./src/components/onboarding/onboarding.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbmJvYXJkaW5nLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"display-none\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"inline-svg\"><symbol viewBox=\"0 0 15 25\" id=\"chevron-right\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.849 12.707L3.535 24.2.707 21.192l8.485-8.485L.171 3.686 3 .857l10.39 10.039 1.459 1.811z\"></path></symbol></svg>\n</div>\n\n<div class=\"tpl__container\">\n\n  <header class=\"tpl__header\">\n    <div class=\"tpl__logo\" aria-label=\"CelebrateMe\"></div>\n  </header>\n  <main class=\"tpl__content\">\n    <ion-app>\n      <ion-router-outlet></ion-router-outlet>\n    </ion-app>\n  </main>\n</div>\n";

/***/ }),

/***/ 8109:
/*!****************************************************************!*\
  !*** ./src/components/events/events.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<article class=\"tpl__view tpl__view--events has-padding is-box\">\n  <div class=\"tpl__view__inner\">\n\n    <header class=\"tpl__view__header text-center\">\n      <h1>My Events</h1>\n    </header>\n\n    <section class=\"tpl__view__content\">\n      <ul class=\"events__list\">\n        <li>\n          <div class=\"events__item\" role=\"button\" tabindex=\"0\">\n            <p class=\"events__item__author font--small\">User Userberg</p>\n            <h4 class=\"events__item__title\">Nicole’s 30th Birthday Bash</h4>\n            <p class=\"events__item__date font--small\">08/25/22</p>\n          </div>\n        </li>\n        <li>\n          <div class=\"events__item\" role=\"button\" tabindex=\"0\">\n            <p class=\"events__item__author font--small\">User Userberg</p>\n            <h4 class=\"events__item__title\">Erin’s Bon Voyage</h4>\n            <p class=\"events__item__date font--small\">09/25/22</p>\n          </div>\n        </li>\n        <li>\n          <div class=\"events__item\" role=\"button\" tabindex=\"0\">\n            <p class=\"events__item__author font--small\">User Userberg</p>\n            <h4 class=\"events__item__title\">Kelly’s Launch Party</h4>\n            <p class=\"events__item__date font--small\">10/25/22</p>\n          </div>\n        </li>\n      </ul>\n    </section>\n\n  </div>\n</article>";

/***/ }),

/***/ 3851:
/*!**************************************************************************!*\
  !*** ./src/components/gift-filled/gift-filled.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<article class=\"tpl__view tpl__view--gift has-padding is-box\">\n  <div class=\"tpl__view__inner\">\n\n    <header class=\"tpl__view__header text-center\">\n      <h1>Gift item details</h1>\n    </header>\n\n    <section class=\"tpl__view__content\">\n      <form class=\"form form--gift\">\n        <header class=\"form__header\">\n          <p class=\"font--small\">*Required</p>\n        </header>\n\n        <section class=\"form__content\">\n          <div class=\"grid has-cols-2 has-gap-large is-adaptive\">\n            <div class=\"grid__item\">\n              <dl class=\"field field--vertical\">\n                <dd>\n                  <input class=\"input input--primary is-required\" type=\"text\" name=\"link\" placeholder=\"Item link*\" title=\"Item link*\" value=\"aesop.com/ca/en/p/kits-travel...\">\n                </dd>\n              </dl>\n            </div>\n\n            <div class=\"grid__item\">\n              <dl class=\"field field--vertical\">\n                <dd>\n                  <input class=\"input input--primary is-required\" type=\"text\" name=\"name\" placeholder=\"Item name*\" title=\"Item name*\" value=\"Aesop Travel Kit\">\n                </dd>\n              </dl>\n            </div>\n          </div>\n\n          <div class=\"grid has-cols-2 has-gap-large is-adaptive\">\n            <div class=\"grid__item\">\n              <dl class=\"field field--vertical\">\n                <dd>\n                  <label class=\"input input--primary input--image\" for=\"gift[image]\">\n                    <span class=\"input--image__text is-hidden\">Item image</span>\n                    <input class=\"input--image__browse\" type=\"file\" accept=\"image/*\" id=\"gift[image]\" tabindex=\"0\">\n                    <img class=\"input--image__preview\" src=\"img/sample-gift.png\" alt=\"Preview\">\n                  </label>\n                </dd>\n              </dl>\n              <p class=\"font--small\">Or upload your own image</p>\n            </div>\n\n            <div class=\"grid__item is-mobile-order-1\">\n              <dl class=\"field field--vertical\">\n                <dd>\n                  <input class=\"input input--primary\" type=\"text\" name=\"description\" placeholder=\"Description\" title=\"Description\" value=\"A pouched filled with Aesop travel...\">\n                </dd>\n              </dl>\n              <dl class=\"field field--vertical\">\n                <dd>\n                  <input class=\"input input--primary is-required\" type=\"text\" name=\"price\" placeholder=\"Price*\" title=\"Price*\" value=\"85.00\">\n                </dd>\n              </dl>\n            </div>\n          </div>\n        </section>\n\n        <footer class=\"form__footer\">\n          <div class=\"buttons buttons--gift\">\n            <button class=\"button button--primary\" type=\"submit\">Add Item</button>\n          </div>\n        </footer>\n      </form>\n    </section>\n\n  </div>\n</article>\n";

/***/ }),

/***/ 8530:
/*!************************************************************!*\
  !*** ./src/components/gift/gift.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<article class=\"tpl__view tpl__view--gift has-padding is-box\">\n  <div class=\"tpl__view__inner\">\n\n    <header class=\"tpl__view__header text-center\">\n      <h1>Gift item details</h1>\n    </header>\n\n    <section class=\"tpl__view__content\">\n      <form class=\"form form--gift\">\n        <header class=\"form__header\">\n          <p class=\"font--small\">*Required</p>\n        </header>\n\n        <section class=\"form__content\">\n          <div class=\"grid has-cols-2 has-gap-large is-adaptive\">\n            <div class=\"grid__item\">\n              <dl class=\"field field--vertical\">\n                <dd>\n                  <input class=\"input input--primary is-required\" type=\"text\" name=\"link\" placeholder=\"Item link*\" title=\"Item link*\">\n                </dd>\n              </dl>\n            </div>\n\n            <div class=\"grid__item\">\n              <dl class=\"field field--vertical\">\n                <dd>\n                  <input class=\"input input--primary is-required\" type=\"text\" name=\"name\" placeholder=\"Item name*\" title=\"Item name*\">\n                </dd>\n              </dl>\n            </div>\n          </div>\n\n          <div class=\"grid has-cols-2 has-gap-large is-adaptive\">\n            <div class=\"grid__item\">\n              <dl class=\"field field--vertical\">\n                <dd>\n                  <label class=\"input input--primary input--image\" for=\"gift[image]\">\n                    <span class=\"input--image__text\">Item image</span>\n                    <input class=\"input--image__browse\" type=\"file\" accept=\"image/*\" id=\"gift[image]\" tabindex=\"0\">\n                    <img class=\"input--image__preview is-hidden\" alt=\"Preview\">\n                  </label>\n                </dd>\n              </dl>\n              <p class=\"font--small\">Or upload your own image</p>\n            </div>\n\n            <div class=\"grid__item is-mobile-order-1\">\n              <dl class=\"field field--vertical\">\n                <dd>\n                  <input class=\"input input--primary\" type=\"text\" name=\"description\" placeholder=\"Description\" title=\"Description\">\n                </dd>\n              </dl>\n              <dl class=\"field field--vertical\">\n                <dd>\n                  <input class=\"input input--primary is-required\" type=\"text\" name=\"price\" placeholder=\"Price*\" title=\"Price*\">\n                </dd>\n              </dl>\n            </div>\n          </div>\n        </section>\n\n        <footer class=\"form__footer\">\n          <div class=\"buttons buttons--gift\">\n            <button class=\"button button--primary\" type=\"submit\">Save</button>\n          </div>\n        </footer>\n      </form>\n    </section>\n\n  </div>\n</article>\n";

/***/ }),

/***/ 1511:
/*!**************************************************************!*\
  !*** ./src/components/login/login.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "  <article class=\"tpl__view tpl__view--login has-padding is-box\">\n      <div class=\"tpl__view__inner\">\n\n        <header class=\"tpl__view__header text-center\">\n          <h1>Let’s Get This Party Started</h1>\n        </header>\n\n        <section class=\"tpl__view__content\">\n          <form class=\"form form--login\" [formGroup]=\"user\" (ngSubmit)=\"onLogin($event)\">\n            <section class=\"form__content\">\n              <dl class=\"field field--vertical\">\n                <dd>\n                  <input class=\"input is-required\" [ngClass]=\"{'is-invalid':(hasError(user, 'email'))}\" name=\"email\" placeholder=\"Email*\" title=\"Email*\" type=\"email\" [formControl]=\"user.controls.email\">\n                  <div class=\"field__hint is-danger\" [ngClass]=\"{'is-hidden': !(hasError(user, 'email'))}\">Email is required.</div>\n                </dd>\n              </dl>\n              <dl class=\"field field--vertical indent-large\">\n                <dd>\n                  <input class=\"input is-required\" [ngClass]=\"{'is-invalid':(hasError(user, 'password'))}\" name=\"password\" placeholder=\"Password*\" title=\"Password*\" type=\"password\" [formControl]=\"user.controls.password\">\n                  <!-- <input class=\"input is-required is-invalid\" name=\"password\" placeholder=\"Password*\" title=\"Password*\" type=\"password\"> -->\n                  <div class=\"field__hint is-danger\" [ngClass]=\"{'is-hidden': !(hasError(user, 'password'))}\">Password is required.</div>\n                </dd>\n              </dl>\n              <dl class=\"field field--vertical indent-large\">\n                <dd>\n                  <div class=\"check\">\n                    <label class=\"check__label\" for=\"login[remember]\">\n                      <input class=\"input input--check\" id=\"login[remember]\" type=\"checkbox\" value=\"Yes\">\n                      <span class=\"check__text\">Remember Me</span>\n                    </label>\n                  </div>\n                </dd>\n              </dl>\n              <div class=\"buttons\">\n                <button class=\"button button--primary\" type=\"submit\">Login</button>\n              </div>\n            </section>\n\n            <footer class=\"form__footer\">\n              <ul class=\"form__links form__links--vertical\">\n                <li>\n                  <a href=\"/password/reset\" target=\"_blank\">Forgot Your Password?</a>\n                </li>\n              </ul>\n            </footer>\n          </form>\n        </section>\n\n        <footer class=\"tpl__view__footer text-center\">\n          <p class=\"font--large\">Don't have an account? <a class=\"link--underline\" href=\"/register\" target=\"_blank\">Sign up</a>.</p>\n        </footer>\n\n      </div>\n    </article>";

/***/ }),

/***/ 4151:
/*!************************************************************************!*\
  !*** ./src/components/onboarding/onboarding.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<article class=\"tpl__view tpl__view--onboarding\">\n  <div class=\"tpl__view__inner\">\n\n    <section class=\"tpl__view__content has-indent-none\">\n      <div class=\"onboarding__slider\">\n        <ul>\n          <li class=\"is-active\">\n            <article class=\"onboarding__item\">\n              <section class=\"onboarding__item__image tpl__section is-box background--primary-light\"></section>\n              <section class=\"onboarding__item__content tpl__section is-box text-center\">\n                <h1>Welcome!</h1>\n                <p>App is designed to easily add products from stores to your CelebrateMe events.</p>\n              </section>\n            </article>\n          </li>\n          <li>\n            <article class=\"onboarding__item\">\n              <section class=\"onboarding__item__image tpl__section is-box background--secondary-light\"></section>\n              <section class=\"onboarding__item__content tpl__section is-box text-center\">\n                <h1>Welcome!</h1>\n                <p>App is designed to easily add products from stores to your CelebrateMe events.</p>\n              </section>\n            </article>\n          </li>\n          <li>\n            <article class=\"onboarding__item\">\n              <section class=\"onboarding__item__image tpl__section is-box background--secondary\"></section>\n              <section class=\"onboarding__item__content tpl__section is-box text-center\">\n                <h1>Welcome!</h1>\n                <p>App is designed to easily add products from stores to your CelebrateMe events.</p>\n              </section>\n            </article>\n          </li>\n          <li>\n            <article class=\"onboarding__item\">\n              <section class=\"onboarding__item__image tpl__section is-box background--third-light\"></section>\n              <section class=\"onboarding__item__content tpl__section is-box text-center\">\n                <h1>Welcome!</h1>\n                <p>App is designed to easily add products from stores to your CelebrateMe events.</p>\n              </section>\n            </article>\n          </li>\n          <li>\n            <article class=\"onboarding__item\">\n              <section class=\"onboarding__item__image tpl__section is-box background--third\"></section>\n              <section class=\"onboarding__item__content tpl__section is-box text-center\">\n                <h1>Welcome!</h1>\n                <p>App is designed to easily add products from stores to your CelebrateMe events.</p>\n              </section>\n            </article>\n          </li>\n        </ul>\n      </div>\n    </section>\n\n    <footer class=\"tpl__view__footer tpl__section is-box has-padding\">\n      <div class=\"onboarding__nav\">\n        <ul>\n          <li class=\"is-active\">\n            <a role=\"button\" tabindex=\"0\" aria-label=\"Welcome\"></a>\n          </li>\n          <li>\n            <a role=\"button\" tabindex=\"0\" aria-label=\"Welcome\"></a>\n          </li>\n          <li>\n            <a role=\"button\" tabindex=\"0\" aria-label=\"Welcome\"></a>\n          </li>\n          <li>\n            <a role=\"button\" tabindex=\"0\" aria-label=\"Welcome\"></a>\n          </li>\n          <li>\n            <a role=\"button\" tabindex=\"0\" aria-label=\"Welcome\"></a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"buttons buttons--onboarding\">\n        <button class=\"button button--primary\">Next</button>\n      </div>\n    </footer>\n\n  </div>\n</article>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map