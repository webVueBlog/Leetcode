/**

class Foo { 
 constructor() { 
 this.values = [1, 2, 3]; 
 }
 * [Symbol.iterator]() { 
yield* this.values; 
} 
}

const f = new Foo(); 
for (const x of f) { 
 console.log(x); 
} 
// 1 
// 2 
// 3

*/