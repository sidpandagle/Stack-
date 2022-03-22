//Stack
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.pop = pop;
  this.push = push;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function pop() {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top - 1];
}

function length() {
  return this.top;
}

function clear() {
  this.top = 0;
}

var s = new Stack();
s.push('test1');
s.push('test2');
console.log(s.peek());
s.pop();
console.log(s.peek());
s.push('test3');
console.log(s.peek());
s.push('test4');
s.push('test5');
console.log(s.peek());
console.log(s.length())
s.clear();
console.log(s.peek());
