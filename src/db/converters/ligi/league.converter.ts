import { Observable } from 'rxjs';

import { ILeague } from '../../models/league.model';
import { ILeagueConverter } from '../league.converter';
import { FootballApiProvider as ApiProvider } from '../../../common/footballApiProvider';

export class LigiLeagueConverter implements ILeagueConverter {
  provider: ApiProvider;

  constructor() { this. provider = ApiProvider.API_FOOTBALL_DATA }
  
  from(data: any): Observable<ILeague> {
    return Observable.of({
      name: data.name,
      code: data.code,
      slug: data.slug
    })
  }
}