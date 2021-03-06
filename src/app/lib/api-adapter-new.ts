import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import { ApiAdapter } from './api-adapter';


export class ApiAdapterNew implements ApiAdapter {
    private userUrl = '/api/user.json';

    constructor(private http: Http) {
    }

    execute(): Observable<any> {
        return Observable.of({userId: 1, type: 'new', name: 'Hallo Welt'});
    }
}
