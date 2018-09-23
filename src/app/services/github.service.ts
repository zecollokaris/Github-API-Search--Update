import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { GithubComponent } from '../component/github.component';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username = 'zecollokaris';
    private client_id = 'dbf81d910a3a2a14e3e1';
    private client_secret = 'ae701bfc8e1d481e8bfd349a2aebf4cbe1c9f87d';

    constructor(private _http:Http){
        console.log('Github Service Init...');
    }

    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('https://api.github.com/users/' + this.username + '/repos')
            .map(res => res.json());
    }

    updateUsername(username:string){
        this.username = username;
    }

}
