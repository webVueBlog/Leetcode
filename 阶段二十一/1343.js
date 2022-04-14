/*
 *
 * [1343] Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
 */

var numOfSubarrays = function(arr, k, threshold) {
    let sum = 0;
    const len = arr.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        sum += arr[i];
        if (i >= k) {
            sum -= arr[i - k];
        }
        if (i >= k - 1 && sum / k >= threshold) {
            count++;
        }
    }
    return count;
};