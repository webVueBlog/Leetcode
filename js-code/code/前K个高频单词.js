/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 692.前K个高频单词 #堆
 root: i
 left: 2*i+1 right: 2*i+2

 知道左边/右边：Math.floor((n-1)/2) => root索引
  [2,1,5,6,3,25,30]
     2(0) (堆顶是100单词中出现频率最低的),字典序更小
 1(1)    5(2)
       25(5) 30(6)
 加进来的单词，与堆顶进行比较，如果出现的频率比堆顶高，新单词替换旧单词
 出现频率变化，在把所有堆变化，把最小频率的放到堆顶
 */
// n堆的长度, map记录单词的出现的频率，堆也是数组
class Heap {
 constructor(n, map) {
  this.arr = [];
  this.max = n;
  this.map = map;
 }
 add(word) {
  // 先拿堆
  let arr = this.arr;
  let len = arr.length;
  if(len < this.max) {
   this.directAdd(word);
   this.rebuild();
  } else {
   const newWordIsMoreFrequent = !this.compareLow(word, arr[0]);
   if(newWordIsMoreFrequent) {
    // 频率更高的话
    this.arr[0] = word
    this.rebuild()
   }
  }
 }
 directAdd(word) {
  this.arr.push(word)
 }
 swap(i, j) {
  let arr = this.arr;
  [arr[i], arr[j]] = [arr[j], arr[i]];
 }
 rebuild() {
  let arr = this.arr
  let len = arr.length
  let i = Math.floor((len-1)/2)
  while(i>=0) {
   let l = 2*i + 1;
   let r = 2*i + 2;
   let root = arr[i];
   let left = arr[l];
   let right = arr[r];
   let temp = i; // 默认根节点最小
   let tempWord = root;
   if(l < len && this.compareLow(left, tempWord)) {
    tempWord = left;
    temp = l;
   }
   if(r < len && this.compareLow(right, tempWord)) {
    tempWord = right;
    temp = r;
   }
   // 当前频率最低的就是根节点 ===
   // 不相等
   if(temp !== i) {
    this.swap(temp, i); // 交换单词
   }
   i--
  }
 }
 compareLow(newWord, oldWord) {
  let map = this.map
  if(map[newWord] < map[oldWord]) {
   return true
  }
  if(map[newWord] > map[oldWord]) {
   return false
  }
  if(map[newWord] === map[oldWord]) {
   return newWord > oldWord
  }
 }
 sort() {
  let map = this.map;
  this.arr.sort((prev, next) => {
   // 按照频率，字典序
   // 如果左边的单词出现的频率大于右边的单词
   if(map[prev] > map[next]) {
    return -1;
   }
   if(map[prev] < map[next]) {
    return 1;
   }
   if(map[prev] === map[next]) { // 频率一样
    return prev > next ? 1 : -1
   }
  })
 }
 get result() {
  this.sort();
  return this.arr
 }
}

var topKFrequent = function(words, k) {
 let map = {};
 words.forEach(word => {
  map[word] = map[word] === undefined ? 1 : map[word] + 1;
 });
 let heap = new Heap(k, map);
 // 遍历不重复的单词列表
 let wordList = Object.keys(map);
 for(let i = 0; i < wordList.length; i++) {
  heap.add(wordList[i])
 }
 return heap.result;
};
