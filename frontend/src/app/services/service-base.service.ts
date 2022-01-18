import * as _ from 'lodash';
// Service to make http requests to the API (ONLY)
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable()
export class ServiceBase {
    constructor(public http: HttpClient) { }

    httpGet(url: string): Observable<Object> {
        return this.http.get(`${environment.apiURL}/${url}`);
    }

    httpPost(url: string, data: any, httpClientData?: any): Observable<Object> {
        if (!_.isEmpty(httpClientData)) {
            return this.http.post(`${environment.apiURL}/${url}`, data, httpClientData);
        }
        return this.http.post(`${environment.apiURL}/${url}`, data);
    }

    httpPatch(url: string, data: any, httpClientData?: any): Observable<Object> {
        if (!_.isEmpty(httpClientData)) {
            return this.http.patch(`${environment.apiURL}/${url}`, data, httpClientData);
        }
        return this.http.patch(`${environment.apiURL}/${url}`, data);
    }
}
