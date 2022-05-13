/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 * 堆
[2, 1, 5, 6, 3, 25, 30]

         2(0)
   1(0)        5(2)        root: i   left: 2*i + 1   right: 2*i + 2
 6(3) 3(4) 25(5) 30(6)     Math.floor((n-1)/2) => root 索引

 (76 ms)
 */

 var topKFrequent = function(words, k) {
    let hash = {};
    for (let word of words) {
        hash[word] = hash[word] + 1 || 1;
    }
    let result = Object.keys(hash).sort((a, b) => {
        let countCompare = hash[b] - hash[a];
        if (countCompare == 0) return a.localeCompare(b)
        else return countCompare;
    });
    return result.slice(0, k);
};
class Heap {
    constructor(n, map) {
        this.arr = [];
        this.max = n;
        this.map = map;
    }
    add(word) {
        let arr = this.arr;
        let len = arr.length;
        if (len < this.max) {
            this.directAdd(word);
            this.rebuild();
        } else {
            const newWordIsMoreFrequent = !this.compareLow(word, arr[0]);
            if (newWordIsMoreFrequent) {
                this.arr[0] = word;
                this.rebuild();
            }
        }
    }
    directAdd(word) {
        this.arr.push(word);
    }
    swap(i, j) {
        let arr = this.arr;
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    rebuild() {
        let arr = this.arr;
        let len = arr.length;
        let i = Math.floor((len - 1) / 2);
        while (i >= 0) {
            let l = 2 * i + 1;
            let r = 2 * i + 2;
            let root = arr[i];
            let left = arr[l];
            let right = arr[r];
            let temp = i;
            let tempWord = root;
            if (l < len && this.compareLow(left, tempWord)) {
                tempWord = left;
                temp = l;
            }
            if (r < len && this.compareLow(right, tempWord)) {
                tempWord = right;
                temp = r;
            }
            if (temp !== i) {
                this.swap(temp, i);
            }

            i--;
        }
    }
    compareLow(newWord, oldWord) {
        let map = this.map;
        if (map[newWord] < map[oldWord]) {
            return true;
        }
        if (map[newWord] > map[oldWord]) {
            return false;
        }
        if (map[newWord] === map[oldWord]) {
            return newWord > oldWord;
        }
    }
    sort() {
        let map = this.map;
        this.arr.sort((prev, next) => {
            if (map[prev] > map[next]) {
                return -1; //不交换位置
            }
            if (map[prev] < map[next]) {
                return 1;
            }
            if (map[prev] === map[next]) {
                return prev > next ? 1 : -1;
            }
        })
    }
    get result() {
        this.sort();
        return this.arr;
    }
}


// var topKFrequent = function(words, k) {
//     const map = {}

//     words.forEach(word => map[word] ? map[word]++ : map[word] = 1)

//     return Object.keys(map)
//         .sort((a, b) => map[a] === map[b] ? (a > b ? 1 : -1) : map[b] - map[a])
//         .slice(0, k);
// };
// @lc code=end

// var topKFrequent = function(words, k) {
//     let map = {};
//     words.forEach(word => {
//         map[word] = map[word] === undefined ? 1 : map[word] + 1;
//     });
//     let heap = new Heap(k, map);
//     let wordList = Object.keys(map);
//     for (let i = 0; i < wordList.length; i++) {
//         heap.add(wordList[i]);
//     }
//     return heap.result;
// };