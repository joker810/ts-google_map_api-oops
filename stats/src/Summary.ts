import type { MatchData } from "./MatchData.js";
import { WinsAnalysis } from "./analyzers/WinsAnalysis.js";
import {HtmlReport} from './reportTargets/htmlReports.js';

export interface Analyzer {
    run(matches: MatchData[]): string;

}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {

    static winsAnalysisWithHtmlReport(team: string):Summary{
        return new Summary(
            new WinsAnalysis(team),new HtmlReport()
        )
    }

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }

    buildAndPrintReport(matches:MatchData[]):void{
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
