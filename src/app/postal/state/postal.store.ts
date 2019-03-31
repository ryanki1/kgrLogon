import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Postal } from './postal.model';

export interface PostalState extends EntityState<Postal> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'postal' })
export class PostalStore extends EntityStore<PostalState, Postal> {

  constructor() {
    super();
  }

}

