import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { PostalStore, PostalState } from './postal.store';
import { Postal } from './postal.model';

@Injectable({
  providedIn: 'root'
})
export class PostalQuery extends QueryEntity<PostalState, Postal> {

  constructor(protected store: PostalStore) {
    super(store);
  }

}
