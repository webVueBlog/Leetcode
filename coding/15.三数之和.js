/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}

给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

输入：nums = []
输出：[]

输入：nums = [0]
输出：[]

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]

排序有序数组：[-4, -1, -1, 0, 1, 2]
遍历循环i指针

[-4, -1, -1, 0, 1, 2]
  i
      l
                   r
sum = -3

去重：
l = l + 1
r = r - 1
i = i + 1

(128 ms)
 */
// (140 ms)
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const ans = [];
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const first = nums[i];
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        let l = i + 1,
            r = n - 1;
        while (l < r) {
            const sum = first + nums[l] + nums[r];
            if (sum > 0) {
                while (l < r && nums[r - 1] === nums[r]) r--;
                r--;
            } else if (sum < 0) {
                while (l < r && nums[l + 1] === nums[l]) l++;
                l++;
            } else {
                ans.push([first, nums[l], nums[r]]);
                while (l < r && nums[l + 1] === nums[l]) l++;
                while (l < r && nums[r - 1] === nums[r]) r--;
                l++;
                r--;
            }
        }
    }
    return ans;
}

// var threeSum = function(nums) {
//     const results = []
//     if (nums.length < 3) return results
//     nums = nums.sort((a, b) => a - b);
//     let target = 0;
//     for (let i = 0; i < nums.length - 2; i++) {
//         if (nums[i] > target) break
//         if (i > 0 && nums[i] === nums[i - 1]) continue
//         let j = i + 1
//         let k = nums.length - 1
//         while (j < k) {
//             let sum = nums[i] + nums[j] + nums[k]
//             if (sum === target) {
//                 results.push([nums[i], nums[j], nums[k]])
//                 while (nums[j] === nums[j + 1]) j++
//                     while (nums[k] === nums[k - 1]) k--
//                         j++
//                         k--
//             } else if (sum < target) {
//                 j++
//             } else {
//                 k--
//             }
//         }
//     }
//     return results
// }

// var threeSum = function(nums) {
//  const results = []
//  //如果我们没有至少3个数字来玩，显然无关紧要!
//  if(nums.length < 3) return results
//  //将数字按升序排列会使这个问题容易得多。
//  //而且，知道整个问题至少需要O(N^2)的时间，我们可以
//  //提供O(NlogN)排序操作
//  nums = nums.sort((a,b) => a - b);
//  //如果问题要求我们自定义目标，我们可以在这里控制它
//  let target = 0;
//  for(let i = 0; i < nums.length - 2; i++) {
//   //“i”表示我们排序的集合中“左”最多的数字。
//   //一旦这个数字达到0，就没有必要再进一步了
//   //正数的和不能等于负数
//   if(nums[i] > target) break
//   //我们不想重复，所以跳过我们已经看过的数字
//   if(i > 0 && nums[i] === nums[i - 1]) continue
//   // ' j '表示' i '和' k '之间的'中间'元素。
//   //当' i '和' k '的时候，我们将在整个数组中递增
//   //锚定在它们的位置上。我们对k减1
//   //每次通过数组，最后递增' i '
//   //当' j '和' k '满足时。
//   let j = i + 1
//   //“k”表示最右边的元素
//   let k = nums.length - 1
//   //总结我们的设置，我们有' i '从开始开始，
//   // ' k '从结尾开始，' j '在两者之间。
//   //
//   //注意' i '是由我们的外部for循环控制的，将移动最慢。
//   //与此同时，' j '和' k '将轮流靠近对方
//   //设置一些逻辑。一旦它们发生碰撞，' i '将递增
//   //然后重复这个过程。
//   while(j < k) {
//    let sum = nums[i] + nums[j] + nums[k]
//    //如果我们找到目标和，增加' j '，减少' k '为
//    //其他可能的组合，其中' i '是锚
//    if(sum === target) {
//     //存储有效的三和
//     results.push([nums[i], nums[j], nums[k]])
//     //这很重要!我们需要继续增加j，减少k

//     //只要这些值是重复的。换句话说，我们想要跳过值
//     //我们已经看过了。否则，将得到[-2,0,0,2,2]的输入数组
//     //[[2 0 2],[2 0 2]]。
//     //
//     //(我不喜欢这部分，因为我们正在做一个while循环
//     //已经在另一个while循环中…)
//     while(nums[j] === nums[j+1]) j++
//     while(nums[k] === nums[k-1]) k--
//     //最后，我们需要将' j '向前移动，' k '向后移动
//     //下一个唯一的元素。之前的while循环不会处理这个问题。
//     j++
//     k--
//     //如果总和太小，则递增' j '以更接近目标
//    } else if(sum < target) {
//     j++
//     //如果和太大，减少' k '以更接近目标
//    } else {
//     k--
//    }
//   }
//  }
//  return results
// }
// @lc code=end