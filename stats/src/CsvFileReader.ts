import fs from "fs";



export class CsvFileReader{
    data:string[][]=[];
    constructor(public filename:string){}
    read():void{
        this.data= fs.readFileSync(this.filename, { encoding: 'utf-8' })
        .split('\n')
        .map((row: string): string[] => row.split(','))
        
    }

}// read any type of files says which is text encoding utf-8