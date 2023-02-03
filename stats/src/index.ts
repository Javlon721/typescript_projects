import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./anilyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.winsAnalysisWithHtmlReport("West Ham");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
