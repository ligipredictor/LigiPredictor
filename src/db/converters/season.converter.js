"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const season_converter_1 = require("../converters/ligi/season.converter");
const season_converter_2 = require("../converters/apiFootballData/season.converter");
const footballApiProvider_1 = require("../../common/footballApiProvider");
class SeasonConverter {
    static getInstance(provider) {
        switch (provider) {
            case footballApiProvider_1.FootballApiProvider.LIGI:
                return new season_converter_1.SeasonConverter();
            case footballApiProvider_1.FootballApiProvider.API_FOOTBALL_DATA:
                return new season_converter_2.SeasonConverter();
            default:
                throw new Error('Converter for Provider does not exist');
        }
    }
}
exports.SeasonConverter = SeasonConverter;
//# sourceMappingURL=season.converter.js.map