"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./anilyzers/WinsAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
class Summary {
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    constructor(analyzer, outPutTarget) {
        this.analyzer = analyzer;
        this.outPutTarget = outPutTarget;
    }
    buildAndPrintReport(matches) {
        const outPut = this.analyzer.run(matches);
        this.outPutTarget.print(outPut);
    }
}
exports.Summary = Summary;
