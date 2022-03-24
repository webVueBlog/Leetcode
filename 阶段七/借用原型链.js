let hd = {
 data: [1, 2, 3, 4, 56, 6],
 view: function (value) {
  console.log(value);
  console.log(this.data);
  return this.data;
 },
};

Object.setPrototypeOf(hd, {
 max() {
  return this.data.sort((a, b) => {
   return b - a;
  });
 },
});

console.log(hd.max()); //[56, 6, 4, 3, 2, 1]
hd.view();
let da = {
 lessons: {
  js: 87,
  node: 100,
  linux: 150,
 },
 get data() {
  return Object.values(this.lessons);
 },
};
console.log(hd.view.call(da, 12142));
console.log(hd.max.apply(da)); // [150, 100, 87]
console.log(hd.max.call(da)); // [150, 100, 87]
