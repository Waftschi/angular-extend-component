import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import { ApiAdapter } from './api-adapter';
import { User } from './user';


// @Injectable()
export class ApiAdapterNew implements ApiAdapter {
    private userUrl = '/api/user.json';

    constructor(private http: Http) {
    }

    execute(): Observable<any> {
        // console.dir(this.http);
        // return this.http.get(this.userUrl).map((response: any) => <User>response.json());
        // console.dir(this.http.get(this.userUrl).map((response: Response) => <User>response.json()));
        return Observable.of({userId: 1, type: 'new', name: 'Hallo Welt'});
        // .map((response: Response) => <User>response.json());
        // .do(data => console.log('All: ' + JSON.stringify(data)))
        // .catch(this.handleError);
        // return [];
    }
}
