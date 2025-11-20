import linkedList from "./linkedList";

console.log('wasss cookin?!');

let lannisters = new linkedList('House Lannister', null);

lannisters.prepend('Joanna');
lannisters.append('Cersei');
lannisters.append('Jaime');
lannisters.prepend('Tywin');
lannisters.append('Tyrion');

console.log(lannisters.size());
console.log(lannisters.returnHead());
console.log(lannisters.tail());
console.log(lannisters.at(3));
console.log(lannisters.pop());
console.log(lannisters.contains('Tyrion'));
console.log(lannisters.finds('Jaime'));
console.log(lannisters.insertAt('Kevan', 2));
console.log(lannisters.removeAt(4));
console.log(lannisters.toString());

const list = new linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());




