import { Sorter } from "./Sorter.js";

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter{
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    //this.head??=node; assign head  = node only if head is null or undefined .
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    let length = 0;
    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('node nt found');
    }
    let count = 0;
    let current: Node | null = this.head;
    while (current) {
      if (count === index) return current;
      count++;
      current = current.next;
    }
    throw new Error('out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error('list is empty');
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number) {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }
  print(): void {
    if (!this.head) return;

    let current: Node | null = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
