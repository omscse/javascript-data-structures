# Collection Of Data Structures implemented in JavaScript

[Priority Queue](#priority-queue)
[Trie](#trie)

## Priority Queue

### Complexity

| Heap method            | Time complexity  | Space complexity  | Method |
| -----------------------|:----------------:|:-----------------:|--------|
| Construct a Heap       | O(N)             | O(N)              |heapify |
| Insert an element      | O(logN)          | O(1)              |add     |
| Get the top element    | O(1)             | O(1)              |peak    |
| Delete the top element | O(logN)          | O(1)              |poll    |
| Get the size of a Heap | O(1)             | O(1)              |size    |
		
**N** _is the number of elements in the heap._

### Usage

```
npm install @javascript-data-structures/collection
```

```js

const { PriorityQueue } = require('@javascript-data-structures/collection');

//By Default creates a max heap
let maxHeap = new PriorityQueue();

maxHeap.add(3);
maxHeap.add(5);
maxHeap.add(2);
console.log(maxHeap);


console.log(maxHeap.toString());
console.log(maxHeap.size);

//Min Heap using Comparator Function
let pq = new PriorityQueue((a,b)=>b-a);

pq.heapify([5,4,3,2,1]);
console.log(pq.peak());

//Max Heap using Comparator Function
pq = new PriorityQueue((a,b)=>a-b);

pq.heapify([1,2,3,4,5]);
pq.add(45);
console.log(pq);

//More Ways to prioritize
let priorityQueue = new PriorityQueue((pointA, pointB)=>pointB[2]-pointA[2]);

```

## Trie

### Methods
insert(word) - inserts given word into Trie
search(word) - search for exact word in the Trie. Returns true if exists, false otherwise.
startsWith(prefix) - checks if Trie has words satarting with the given prefix. Returns true if exists, false otherwise.
findAllMatches(prefix) - Retuns all the words matching with the prefix in the Trie.


### Usage

```
npm install @javascript-data-structures/collection
```

```js

let trie = new Trie();

trie.insert("apple");

trie.insert("app");

trie.insert("apps");

trie.insert("ball");

trie.insert("b");

console.log(trie.search("ba"));
console.log(trie.startsWith("ball"));
console.log(trie.findAllMatches("app"));

```

