import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {isArray} from "ionic-angular/util/util";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/timeout";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";


@Injectable()
export class ServiceApi {

    private _uri   : string = 'https://dev.celebratemeregistry.com/api/';

    private _token : object = {};

    private http : HttpClient;

    private _config : object = {};

    private version: string = 'v1';

    set token(data: object) {
        this._token = data;
    }

    get token(): object|{} {
        return this._token;
    }

    get uri() : string {
        return this._uri;
    }

    constructor(_http: HttpClient) {
        this.http = _http;
    }

    public createQueryParams(a) {
        let prefix, name, output;
        let s = [];
        let r20 = /%20/g;
        let add = (key, value) => {
            // If value is a function, invoke it and return its value
            value = ( typeof value == 'function' ) ? value() : ( value == null ? "" : value );
            s[ s.length ] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };

        if (isArray(a)) {
            for (name in a) {
                add(name, a[name]);
            }
        } else {
            for (prefix in a) {
                this.buildParams(prefix, a[prefix], add);
            }
        }

        output = s.join("&").replace(r20, "+");
        return output;
    };

    private buildParams(prefix, obj, add) {
        let name, i, l, rbracket;
        rbracket = /\[\]$/;
        if (isArray(obj) || obj instanceof Array) {
            for (i = 0, l = obj.length; i < l; i++) {
                if (rbracket.test(prefix)) {
                    add(prefix, obj[i]);
                } else {
                    this.buildParams(prefix + "[" + ( typeof obj[i] === "object" ? i : "" ) + "]", obj[i], add);
                }
            }
        } else if (typeof obj == "object") {
            // Serialize object item.
            for (name in obj) {
                this.buildParams(prefix + "[" + name + "]", obj[ name ], add);
            }
        } else {
            // Serialize scalar item.
            add(prefix, obj);
        }
    }

    private buildRequest(method: string, path: string, params: object = {}, headers: any = {}) {
        let uri = this.uri + path;
        console.log('buildRequest - uri');
        console.log(uri);
        headers = Object.assign(headers, {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Cache-Control':'no-cache',
            'Access-Control-Expose-Headers' : 'Access-Control-*',
            'Access-Control-Allow-Headers' : 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept,X-Request-With',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'false'
        });

        let options = {
            'headers': new HttpHeaders(headers)
        };

        method = method.toLocaleUpperCase();

        if(method == 'POST') {
            return this.http.post(uri, JSON.stringify(params), options);
        }

        if(method == 'POST_MULTIPART') {
            return this.http.post(uri, params, options);
        }

        if(method == 'PUT') {
            return this.http.put(uri, JSON.stringify(params), options);
        }

        if(params) {
            uri = uri +'?'+ this.createQueryParams(params);
        }

        if(method == 'DELETE') {
            return this.http.delete(uri, options);
        }

        return this.http.get(uri, options);
    }

    public hasInternet() : boolean {
        if(navigator.onLine == false) {
            return false;
        }

        return true;
    }

    public request(method: string, path: string, params: object = {}, headers: object = {}): Observable<any> {
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

    public login(email: string, password: string) {
        return this.request('POST', this.version +'/login', {
            'email'    : email,
            'password' : password
        });
    }

    public logout() {
        return this.request('GET', this.version +'/logout', {}, {
            'Authorization' : this._token['token']
        });
    }

    public getRegistryList(params: any[] = []) {
        return this.request('POST', this.version +'/get-registry-list', params, {
            'Authorization': this._token['token']
        });
    }

    public getProductList(params: any[] = []) {
        return this.request('POST', this.version +'/get-product-list', params, {
            'Authorization': this._token['token']
        });
    }

    public getMetaDetail(params: any[] = []) {
        return this.request('POST', this.version +'/get-meta-detail', params, {
            'Authorization': this._token['token']
        });
    }

    public saveProduct(params: any[] = []) {
        return this.request('POST', this.version +'/save-product', params, {
            'Authorization': this._token['token']
        });
    }



    ///

    public getDemo(type: string, limit: number = 25, offset: number = 0, filter: string[] = []) {

        filter.push('type='+ type);

        return this.request('GET', 'getDemo', {
            'limit'  : limit,
            'skip'   : offset,
            'filter' : filter,
        }, {
            'Authorization': this._token['token']
        });
    }

    public postDemo(params: any[] = []) {
        return this.request('POST', 'postDemo', params, {
            'Authorization': this._token['token']
        });
    }

    public putDemo(id: string,params: any[] = []) {
        return this.request('PUT', 'putDemo/'+ id, params, {
            'Authorization': this._token['token']
        });
    }

    public deleteDemo(id: string) {
        return this.request('DELETE', 'demo/'+ id, {}, {
            'Authorization': this._token['token']
        });
    }

}
