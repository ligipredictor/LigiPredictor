import { Observable } from 'rxjs';

import { IFixture, FixtureModel } from '../models/fixture.model';
import { IBaseProviderRepository, BaseProviderRepository } from './baseProvider.repo';
import { IFixtureConverter, FixtureConverter } from '../converters/fixture.converter';
import { FootballApiProvider as ApiProvider } from '../../common/footballApiProvider';

export interface IFixtureRepository extends IBaseProviderRepository<IFixture> {
  findSelectableFixtures$(season, gameRound): Observable<IFixture[]>
}

export class FixtureRepository extends BaseProviderRepository<IFixture> implements IFixtureRepository {
  static getInstance(provider: ApiProvider): IFixtureRepository {
    return new FixtureRepository(FixtureConverter.getInstance(provider));
  }

  constructor(converter: IFixtureConverter) {
    super(FixtureModel, converter);
  }

  findSelectableFixtures$(season, gameRound) {
    return Observable.of([<IFixture>{}])    
  }  
}