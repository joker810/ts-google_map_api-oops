import { Sorter } from "./Sorter.js";

export class CharacterCollection extends Sorter{
  constructor(public data: string) {super();}
  
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (
      this.data[leftIndex] === undefined ||
      this.data[rightIndex] === undefined
    )
      throw new Error('undefined value found');
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex]?.toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    let newData: string[] = this.data.split('');
    if (newData[leftIndex] === undefined || newData[rightIndex] === undefined)
      throw new Error('undefined value found');
    const leftHand = newData[leftIndex];
    newData[leftIndex] = newData[rightIndex];
    newData[rightIndex] = leftHand;
    this.data = newData.join('');
  }
}
