import { Results } from './results.interface';
import { Location } from './locations.interface';

export interface Response<T> {
  characters?: Results<T>;
  locations?: Results<T>;
  location?: Location;
}
