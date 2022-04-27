function findMostWord(article) {
 if(!article) return
 // 参数处理
 article = article.trim().toLowerCase();
 let wordList = article.match(/[a-z]+/g),
 visited = [],
 maxNum = 0,
 maxWord = ''
 article = ' ' + wordList.join(' ') + ' ';
 // 遍历判断单词出现次数
 wordList.forEach(function(item) {
  if(visited.indexOf(item) < 0) {
   visited.push(item);
   let word = new RegExp(' ' + item + ' ', 'g'),
   num = article.match(word).length;
   if(num>maxNum) {
    maxNum = num;
    maxWord = item;
   }
  }
 });
 return maxWord + ' ' + maxNum;
}