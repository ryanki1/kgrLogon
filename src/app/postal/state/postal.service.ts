import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostalStore } from './postal.store';
import { Postal } from './postal.model';
import {ID} from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class PostalService {

  constructor(private postalStore: PostalStore,
              private http: HttpClient) {
  }

  get() {
    this.http.get('./assets/postal.json').subscribe(
        (entities: Postal[]) =>
            this.postalStore.set(entities)
    );
  }

  upsert(id, postal: Partial<Postal>) {
    this.postalStore.upsert(id, postal);
  }

  remove(id: ID) {
    this.postalStore.remove(id);
  }
}
