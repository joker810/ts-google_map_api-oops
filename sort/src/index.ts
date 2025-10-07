
import { NumbersCollection } from './NumberCollection.js';
import { CharacterCollection } from './CharacterCollection.js';
import { LinkedList } from './LinkedList.js';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 1]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharacterCollection('Xaabbc');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
