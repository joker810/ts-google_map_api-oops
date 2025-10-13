
import { CsvFileReader } from "./CsvFileReader.js";
import { MatchReader } from "./MatchReader.js";
import { ConsoleReport } from "./reportTargets/ConsoleReports.js";
import { WinsAnalysis } from "./analyzers/WinsAnalysis.js";
import { Summary } from "./Summary.js";
import {HtmlReport} from './reportTargets/htmlReports.js';

//this is for inhertence..!
// const File=new MatchReader('football.csv');
// File.read();

//create an object that satisfies the 'dataReader' interface
const csvFileReader = new CsvFileReader('football.csv');
//create an instance of Matchreader and pass in somethign satisfying the 'DataReader' interface
const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load();


//static class methods
const summary =Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);



     


