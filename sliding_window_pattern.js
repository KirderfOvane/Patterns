// complexity O(n)
const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

const maxSum = maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
const maxSum2 = maxSubarraySum([100, 200, 300, 400], 2);
const maxSum3 = maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
const maxSum4 = maxSubarraySum([-3, 4, 0, -2, 6, -1], 2);
//console.log(maxSum4);

// parameters: positive array and positive num
// returns smallest contiguous subarray that have a sum larger och equal to parameter:num
/* const minSubArrayLen = (arr, num) => {
  let minSubArr = 1;

  while (minSubArr < arr.length) {
    let windowSum = 0;

    if (minSubArr <= 1) {
      for (i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
          return minSubArr;
        }
      }
      minSubArr++;
    }
    for (i = 0; i < minSubArr; i++) {
      //1!!!!
      windowSum += arr[i];
      console.log(windowSum);
    }

    if (windowSum >= num) {
      return minSubArr;
    }
    for (i = minSubArr - 1; i < arr.length; i++) {
      windowSum = windowSum - arr[i - 1] + arr[i + 1];

      if (windowSum >= num) {
        return minSubArr;
      }
    }

    minSubArr++;
  }

  return 0;
};

const mSub1 = minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
/* const mSub2 = minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [4,3] is the smallest subarray
const mSub3 = minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 2 -> because [4,3] is the smallest subarray
const mSub4 = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 2 -> because [4,3] is the smallest subarray
const mSub5 = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 2 -> because [4,3] is the smallest subarray
const mSub6 = minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2 -> because [4,3] is the smallest subarray
const mSub7 = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 2 -> because [4,3] is the smallest subarray */
//console.log(mSub1, mSub2, mSub3, mSub4, mSub5, mSub6, mSub7); */
const minSubArrayLen = (arr, num) => {
  let minSubArr = 0;

  while (minSubArr < arr.length) {
    let windowSum = 0;

    //console.log('start ' + minSubArr);

    if (minSubArr <= 1) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
          return minSubArr;
        }
      }

      //minSubArr++;
    }

    for (let i = 0; i < minSubArr; i++) {
      windowSum += arr[i];
    }

    // console.log('windowSum triggered ' + minSubArr);

    if (windowSum >= num) {
      // console.log('wat');

      //console.log(windowSum);

      return minSubArr;
    }

    for (let i = minSubArr - 1; i < arr.length; i++) {
      windowSum = windowSum - arr[i - 1] + arr[i + 1];

      if (windowSum >= num) {
        //console.log(windowSum);

        return i;
      }
    }

    minSubArr++;
  }

  return 0;
};

const test1 = minSubArrayLen([2, 3, 1, 2, 4, 3], 7); //2

const test2 = minSubArrayLen([2, 1, 6, 5, 4], 9); //2

const test3 = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); //3

const test4 = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); //5

//console.log(test1, test2, test3, test4);

//Correct
function CorrectminSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    console.log('#################');
    console.log('total: ' + total);
    console.log('start: ' + start);
    console.log('end: ' + end);
    console.log('minLen: ' + minLen);
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
      // console.log(total);
    }

    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

const ctest1 = CorrectminSubArrayLen([2, 3, 1, 2, 4, 3], 7); //2

//const ctest2 = CorrectminSubArrayLen([2, 1, 6, 5, 4], 9); //2

//const ctest3 = CorrectminSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); //3

//const ctest4 = CorrectminSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); //5

//console.log(ctest1, ctest2, ctest3, ctest4);
