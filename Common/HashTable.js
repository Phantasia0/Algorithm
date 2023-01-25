//HashTable
//Map, Set, 객체

const table = new Map();
table.set("key", 100);
table.set("key", 200);
console.log(table.has("key")); //true
table.set("key2", "Hello");
console.log(table["key"]); // undefined
console.log(table.get("key")); //100
const object = { a: 1 };
table.set(object, "A1"); //Map은 Object도 Key로 쓸수 있음
console.log(table.get(object)); //A1
table.delete(object);
console.log(table.get(object)); //undefined
console.log(table.keys()); // {'key', 'key2'}
console.log(table.values()); // {100, "Hello"}
table.clear();
table.set("key", 200);
console.log(table.values()); //{}

//Set 중복데이터 저장 X
const tableSet = new Set();
tableSet.add("key");
tableSet.add("key2");
console.log(tableSet.values());
console.log(tableSet.entries());
tableSet.forEach(function (value) {
  console.log("TEST2", value);
});
console.log(tableSet.has("key")); //true
console.log(tableSet.has("key3")); //false
tableSet.delete("key2");
console.log(tableSet.has("key2")); //false
tableSet.add("key3");
console.log(tableSet.size); //2
tableSet.clear();
console.log(tableSet.size); //0
