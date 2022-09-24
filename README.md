# Collection Of Data Structures implemented in JavaScript

## Priority Queue

### Complexity

| Heap method            | Time complexity  | Space complexity  | Method |
| -----------------------|:----------------:|:-----------------:|-------:|
| Construct a Heap       | O(N)             | O(N)              |heapify |
| Insert an element      | O(logN)          | O(1)              |add     |
| Get the top element    | O(1)             | O(1)              |peak    |
| Delete the top element | O(logN)          | O(logN)           |poll    |
| Get the size of a Heap | O(1)             | O(1)              |size    |
		
**N** _is the number of elements in the heap.}N is the number of elements in the heap._

# Usage

```

const { PriorityQueue } = require('javascript-data-structures');

//By Default creates a max heap
let maxHeap = new PriorityQueue();

maxHeap.add(3);
maxHeap.add(5);
maxHeap.add(2);
console.log(minHeap);


console.log(minHeap.toString());
console.log(minHeap.size);

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



