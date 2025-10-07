import { Sorter } from './Sorter.js';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (
      this.data[leftIndex] === undefined ||
      this.data[rightIndex] === undefined
    ) {
      throw new Error('Invalid index');
    }
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (
      this.data[leftIndex] === undefined ||
      this.data[rightIndex] === undefined
    ) {
      throw new Error('Invalid index');
    }
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
