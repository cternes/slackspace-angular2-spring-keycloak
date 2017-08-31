import { Contract } from '../model/contract.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

@Injectable()
export class ContractService {

    constructor(private http: Http) { }

    public getContracts(): Observable<Contract[]> {
        const url = `${environment.BACKEND_URL}/contracts`;
        return this.http.get(url)
            .map(response => response.json());
    }
}
