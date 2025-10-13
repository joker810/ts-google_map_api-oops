import { CsvFileReader } from "./CsvFileReader.js";
import { dateStringToDate } from "./utils.js";
import { matchResult } from "./MatchResult.js";

type MatchData=[Date,string,string,number,number,matchResult,string];


export class MatchReader extends CsvFileReader<MatchData> {
    mapRow(row: string[]):MatchData {
        return[
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as matchResult,
        row[6]
    ]
}
}