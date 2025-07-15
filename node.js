import { LinkedList } from "./linked-list.js";

const x = new LinkedList();
console.log("Head:", x.getHead());
console.log("Tail:", x.getTail());
console.log(x.toString(), "\tsize", x.size());
x.append("Hello");
console.log(x.toString(), "\tsize", x.size());
x.append("My");
console.log(x.toString(), "\tsize", x.size());
x.append("Lovelies");
console.log(x.toString(), "\tsize", x.size());
x.prepend("Attention!");
console.log(x.toString(), "\tsize", x.size());
console.log("Head:", x.getHead());
console.log("Tail:", x.getTail());
for (let i = 0; i < 5; i++) {
	console.log(`At ${i} we have ${x.at(i)}`);
}

const a = ["Attention!", "Hello", "My", "Lovelies", "notpresent"];
a.forEach((e) => console.log(`${e}: ${x.find(e)}`));

console.log(x.toString(), "\tsize", x.size());

for (let i = 0; i <= 5; i++) {
	console.log(`Index ${i}`);
	x.insertAt("HERE!!", i);
	console.log(x.toString(), "\tsize", x.size());
	x.removeAt(i);
	console.log(x.toString(), "\tsize", x.size());
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString()); 