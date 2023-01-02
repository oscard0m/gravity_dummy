import _ from "lodash";

console.log(_.merge({ a: 1 }, { b: 2 }));
console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
