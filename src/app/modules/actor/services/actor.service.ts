import { Injectable } from '@angular/core';
import {ACTORS} from "../classes/actor_data";
import {Actor} from "../classes/actor";
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ActorService {

  constructor(private _http: Http) {

  }

  getActors(): Promise<Actor[]> {
    return Promise.resolve(ACTORS);
  }


  getActorsRest() {
    return this._http.get("https://jsonplaceholder.typicode.com/photos")
        .map(res=>res.json());
  }

}