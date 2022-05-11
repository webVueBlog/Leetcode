/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}

给定一个单词数组 words 和一个长度 maxWidth ，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。

你应该使用 “贪心算法” 来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth 个字符。

要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。

文本的最后一行应为左对齐，且单词之间不插入额外的空格。

注意:

单词是指由非空格字符组成的字符序列。
每个单词的长度大于 0，小于等于 maxWidth。
输入单词数组 words 至少包含一个单词。

提示:

1 <= words.length <= 300
1 <= words[i].length <= 20
words[i] 由小写英文字母和符号组成
1 <= maxWidth <= 100
words[i].length <= maxWidth

输入: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
输出:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]

输入:words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
输出:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
解释: 注意最后一行的格式应为 "shall be    " 而不是 "shall     be",
     因为最后一行应为左对齐，而不是左右两端对齐。       
     第二行同样为左对齐，这是因为这行只包含一个单词。
 (52 ms)
 */
var fullJustify = function(words, maxWidth) {
 const res = [];
 let buf = [];
 let width = maxWidth;
 
 //贪婪的打包每一行
 //当失败时，在结果中添加填充的行
 //和开始一个新的行
 words.forEach(word => {
     //检查单词是否适合当前行
     //如果有足够的空间放and这个词，那么这个词就是合适的
     //它和左边的单词之间的空格
     if (word.length <= (width - buf.length)) {
         buf.push(word);
         width -= word.length;
     } else {
         //这个词不适合这一行，发送这一行填充
         addWordToResult(res, buf.slice(), maxWidth);
         
         //以当前单词开始新行
         buf = [word];
         //重置当前行宽
         width = maxWidth - word.length;
     }
 });
 
 //这是最后一行的处理
 //根据规则，这只能是合理的
 //添加所有填充到右边，而不是单词之间
 if (buf.length) {
     let str = buf.join(' ');
     str += ' '.repeat(maxWidth - str.length);
     res.push(str);
 }
 
 return res;
};

//最大的单词是在每行现在填补他们与空格
function addWordToResult(res, buf, maxWidth) {
 //需要多少空间
 let spaces = maxWidth - buf.reduce((acc, cur) => cur.length + acc, 0);
 
 //如果一行中只有一个单词
 //然后只添加填充到结束和返回
 if (buf.length === 1) {
     buf[0] += ' '.repeat(spaces);
     res.push(buf[0]);
     return;
 }
 
 //如果一行中有多个单词，
 //减少在buf过程中创建的空格。加入(' ')
 //等于n - 1个空格
 spaces -= buf.length - 1;
 
 //除last以外的所有单词都应该在其字符串中添加空格
 const end = buf.length - 1;
 let index = 0;
 
 //如果有空间，请分配
 //均匀地循环回缓冲区的开头
 while (spaces-- > 0) {
     buf[index] += ' ';
     
     index = (index + 1) % end;
 }
 
 res.push(buf.join(' '))
}
// @lc code=end

