function createStack() {
  //factory fxn that returns js obj
  const array = [];
  return {
    //last in, first out - items added to front and taken way from front os arr
    /*
        add- push
        remove- pop
        peek
        length
        isEmpty
        */

    push(item) {
      array.push(item);
    },
    pop() {
      return array.pop();
    },
    peek() {
      return array[array.length - 1];
    },
    get length() {
      return array.length; //using only arr.length will give 0, bc it runs when arr is created, not the current arr length
      //is gives the length function object fam
    },
    isEmpty() {
      return array.length === 0;
    },
  };
}

const body = createStack();
body.push("underwear");
body.push("psnts");
body.push("socks");
body.push("shoes");

body.pop();
console.log(body.length);
