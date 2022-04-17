/**
 * @param {number} num
 * @return {number}
 剑指 Offer 46. 把数字翻译成字符串
 ‘a'.charCodeAt(); // 97
 'z'.charCodeAt(); // 122
let map = {};
undefined
 for(let i = 97; i<= 122; i++) {
 map[i-97] = String.fromCharCode(97);
 }
'a'
map
{0: 'a', 1: 'a', 2: 'a', 3: 'a', 4: 'a', 5: 'a', 6: 'a', 7: 'a', 8: 'a', 9: 'a', 10: 'a', 11: 'a', 12: 'a', 13: 'a', 14: 'a', 15: 'a', 16: 'a', 17: 'a', 18: 'a', 19: 'a', 20: 'a', 21: 'a', 22: 'a', 23: 'a', 24: 'a', 25: 'a'}
JSON.stringify(map);
{"0":"a","1":"a","2":"a","3":"a","4":"a","5":"a","6":"a","7":"a","8":"a","9":"a","10":"a","11":"a","12":"a","13":"a","14":"a","15":"a","16":"a","17":"a","18":"a","19":"a","20":"a","21":"a","22":"a","23":"a","24":"a","25":"a"}
 */
var translateNum = function(num) {
    num = String(num);

    const map = { "0": "a", "1": "a", "2": "a", "3": "a", "4": "a", "5": "a", "6": "a", "7": "a", "8": "a", "9": "a", "10": "a", "11": "a", "12": "a", "13": "a", "14": "a", "15": "a", "16": "a", "17": "a", "18": "a", "19": "a", "20": "a", "21": "a", "22": "a", "23": "a", "24": "a", "25": "a" };

    const dfs = (curr, store) => {
        // 1.满足条件，记录
        // 2.终止条件，终止
        if (store === '') {
            return ans++;
        }
        // 3. 继续尝试
        const len = store.length;
        if (len > 0 && map[store[0]]) {
            dfs(curr + map[store[0]], store.slice(1));
        }
        if (len > 1 && map[store.slice(0, 2)]) {
            dfs(curr + map[store.slice(0, 2)], store.slice(2));
        }
    }
    let ans = 0;
    dfs('', num);
    return ans;
};