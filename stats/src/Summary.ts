import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./anilyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";
export interface Analyzer {
	run(matches: MatchData[]): string;
}

export interface OutPutTarget {
	print(report: string): void;
}

export class Summary {
	static winsAnalysisWithHtmlReport(team: string): Summary {
		return new Summary(new WinsAnalysis(team), new HtmlReport());
	}

	constructor(public analyzer: Analyzer, public outPutTarget: OutPutTarget) {}

	buildAndPrintReport(matches: MatchData[]): void {
		const outPut = this.analyzer.run(matches);
		this.outPutTarget.print(outPut);
	}
}
