import { expect } from 'chai';

import { ILeagueRepository, LeagueRepository } from '../../src/db/repositories/league.repo';
import * as db from '../../src/db/index';
import { config } from '../../src/config/environment/index'
import { FootballApiProvider as ApiProvider } from '../../src/common/footballApiProvider';

const league = {
  name: 'English Premier League',
  slug: 'english_premier_league',
  code: 'epl'
};

describe.only('LeagueRepo', function() {
  this.timeout(5000);
  before((done) => {
    db.init(config.mongo.uri, done, { drop: true });
  })
  afterEach((done) => {
    db.drop().then(() => {
      done();      
    })
  })
  after((done) => {
    db.close().then(() => {
      done();
    })
  })

  it('should save new league', (done) => {
    let leagueRepo = LeagueRepository.getInstance(ApiProvider.LIGI);

    leagueRepo.save$(league)
      .subscribe((data: any) => {
        let { name, slug, code } = data
        expect(name).to.equal(league.name)
        expect(slug).to.equal(league.slug)
        expect(code).to.equal(league.code)
        done();
      }, (err) => { console.log(err); done(); });
   });
})