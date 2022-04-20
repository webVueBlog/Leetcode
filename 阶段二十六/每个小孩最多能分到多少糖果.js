/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 2226. 每个小孩最多能分到多少糖果
 */
var maximumCandies = function(candies, k) {
    let r = Math.max(...candies) + 1;
    let l = 0;
    while(l < r) {
        let mid = l + ((r-l) >> 1);
        if(check(candies, k, mid)) {
            l = mid+1;
        }else{
            r = mid;
        }
    }
    return l-1;
};

function check(candies, k, c) {
    let kids = 0;
    for(const candy of candies) {
        kids += Math.floor(candy/c);
    }
    return kids >= k;
}