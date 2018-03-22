"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const footballApiProvider_1 = require("../../../common/footballApiProvider");
class TeamConverter {
    constructor() { this.provider = footballApiProvider_1.FootballApiProvider.API_FOOTBALL_DATA; }
    from(data) {
        return rxjs_1.Observable.of({
            name: data.name,
            slug: data.slug,
            crestUrl: data.crestUrl
        });
    }
}
exports.TeamConverter = TeamConverter;
//# sourceMappingURL=team.converter.js.map