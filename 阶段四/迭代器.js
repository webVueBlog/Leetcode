function createIerater(items) {
 let i = 0;
 return {
  next: function () {
   let done = i >= items.length;
   let value = !done ? items[i++] : undefined;
   return {
    done,
    value,
   };
  },
 };
}