import { Images } from './images';
import { Abilities } from './abillities';
export class Pokemon {
  id?: number;
  name?:string;
  base_experience?:number;
  height?: number;
  is_default?: boolean;
  order?: number;
  weight?:number;
  abilities?: Abilities[];
  sprites?: Images;

  constructor(object: Partial<Pokemon>){
    Object.assign(this, object);

}
}
