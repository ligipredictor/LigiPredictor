import { IFixtureRepository, FixtureRepository }  from '../../../../db/repositories/fixture.repo'
import { FootballApiProvider as ApiProvider } from '../../../../common/footballApiProvider';

export interface IFixturesUpdater {
  updateFixtures(fixtures: any[]);
}

export class FixturesUpdater implements IFixturesUpdater {
  static getInstance(provider: ApiProvider) {
    return new FixturesUpdater(FixtureRepository.getInstance(provider));
  }

  constructor(private fixtureRepo: IFixtureRepository) {
  }

  updateFixtures(fixtures: any[]) {
    throw new Error("Method not implemented.");
  }
}