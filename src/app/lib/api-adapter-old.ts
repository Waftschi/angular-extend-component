import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import { ApiAdapter } from './api-adapter';


// @Injectable()
export class ApiAdapterOld implements ApiAdapter {
    private productUrl = 'api/products/products.json';

    constructor(private http: Http) {

    }

    execute(): Observable<any> {
        return Observable.of({userId: 1, type: 'old'});
    }

}

