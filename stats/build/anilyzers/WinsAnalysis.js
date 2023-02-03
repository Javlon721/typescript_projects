"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === this.teamName && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === this.teamName &&
                match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return `This ${this.teamName} won ${wins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
