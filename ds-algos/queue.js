function createQueue() {
  const queue = []; // first in, first oout
  //last item in arr is first out, items added to front- highest index removed first
  return {
    /*
        add
        remove
        peel
        length 
        isEmpty
         */
    enqueue(item) {
      queue.unshift(item); //add new item to the beginning of array
    },
    dequeue() {
      return queue.pop(); //removes last item from array
    },
    peek() {
      return queue[queue.length - 1]; //return first item - next to be removed
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    },
  };
}

function createPriorityQueue() {
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();
  return {
    /*
        add
        remove
        peel
        length 
        isEmpty
         */
    enqueue(item, highPriority = false) {
      highPriority
        ? highPriorityQueue.enqueue(item)
        : lowPriorityQueue.enqueue(item);
    },
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }
      return lowPriorityQueue.dequeue();
    },
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }
      return lowPriorityQueue.peek();
    },
    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    },
  };
}

const q = createPriorityQueue();

q.enqueue("create feature");
q.enqueue("emergency task", true);
q.enqueue("bug fix");

console.log(q.peek());
q.dequeue();
console.log(q.peek());
console.log(q.length);
