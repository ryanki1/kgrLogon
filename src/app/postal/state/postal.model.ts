import { ID } from '@datorama/akita';

export interface Postal {
  id: ID;
  line1: string;
  line2: string;
  line3: string;
  city: string;
  postcode: string;
}

/**
 * A factory function that creates Postal
 */
export function createPostal() {
  return {
    line1: '',
    line2: '',
    line3: '',
    city: '',
    postcode: ''
  } as Postal;
}
