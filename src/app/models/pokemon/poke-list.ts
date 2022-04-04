import { ResponseLink } from './response-link';
export class PokeList {
  count?: number;
  next?: string;
  previous?: string;
  results: ResponseLink[] = [];

  constructor(object: Partial<PokeList>){
    Object.assign(this, object);
  }

}
