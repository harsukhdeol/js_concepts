function createNode(value) {
  return {
    value,
    next: null,
  };
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    push(value) {
      const node = createNode(value);

      if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.length++;
        return node;
      }
      //link up current last node to new node and move pointed to newly created node
      this.tail.next = node;
      this.tail = node;
      this.length++;
      return node;
    },
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      const node = this.tail;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length--;
        return node;
      }
      let current = this.head; //can't traverse backwards so gotta loop to find 2nd last node
      let penultimate;

      while (current) {
        //
        if (current.next === this.tail) {
          penultimate = current; //found second last item
          break;
        }
        current = current.next;
      }
      penultimate.next = null;
      this.tail = penultimate;
      this.length--;

      return node;
    },
    get(index) {
      if (index < 0 || index > this.length - 1) return null;

      if (index === 0) return this.head;

      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    },
    delete(index) {
      if (index < 0 || index > this.length - 1) return null;

      if (index === 0) {
        const deleted = this.head;
        this.head = this.head.next; //sset new head
        this.length--;
        return deleted;
      }

      let current = this.head;
      let prevNode;
      for (let i = 0; i < index; i++) {
        prevNode = current;
        current = current.next;
      }
      const deleted = current;
      prevNode.next = current.next;

      if (prevNode.next === null) {
        this.tail = prevNode;
      }
      this.length--;
      return deleted;
    },
    isEmpty() {
      return this.length === 0;
    },
    print() {
      const values = [];

      let current = this.head;
      while (current) {
        //save all node values to arr
        values.push(current.value);
        current = current.next;
      }
      return values.join(" => ");
    },
  };
}

const list = createLinkedList(); //create linked list obj
const values = ["a", "d", "f", "g", "v"]; // create array of values
const nodes = values.map((val) => list.push(val)); //iterate over arr and push to linkedlist

console.log(list.pop().value);
console.log(list.print());
console.log(list.isEmpty());
console.log(list.delete(2));
console.log(list.get(1));
console.log(list.print());
