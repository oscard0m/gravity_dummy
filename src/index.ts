import lodash from "lodash";
import cowsay from "cowsay"

console.log(lodash.merge({ a: 1 }, { b: 2 }));

console.log(cowsay.say({
	text: "Hello world!"
}))
