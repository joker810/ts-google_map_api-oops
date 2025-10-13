import type { MatchData } from "../MatchData.js";
import { type Analyzer } from "../Summary.js";
import { matchResult } from "../MatchResult.js";

export class WinsAnalysis implements Analyzer {

    constructor(public team: string) { }
    run(matches: MatchData[]): string {

        let wins = 0;
        for (let match of matches) {
            if (match[1] === 'Man United' && match[5] === matchResult.homeWin) {
                wins++;
            } else if (match[2] === 'Man United' && match[5] === matchResult.awayWin) {
                wins++;
            }
        }

        return `Team ${this.team} won ${wins} games`;

    }

}