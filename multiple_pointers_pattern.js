// works on sorted lists
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

// works on sorted lists
function multiplePointers(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const result = multiplePointers([-4, -3, -2, -1, 0, 7, 3, 5]);
//console.log(result);

// works on sorted lists
const countUniqueValues = (array) => {
  //process

  //            i
  //  0,1,2,3,4,5,3,3,3,4,5,6,7,8,9,10
  //                      j

  // 0 === 1 -> false -> i++ ,array[i] = array[j], j++
  // 1 === 2 -> false -> i++ ,array[i] = array[j], j++
  // 2 === 2 -> true  -> j++
  // 2 === 2 -> true  -> j++
  // 2 === 2 -> true  -> j++
  // 2 === 3 -> false -> i++ ,array[i] = array[j], j++
  // 3 === 3 -> true  -> j++
  // 3 === 3 -> true  -> j++
  // 3 === 4 -> false  -> i++ ,array[i] = array[j], j++

  // first pointer starts at zero
  let i = 0;
  // second pointer starts at one
  let j = 1;
  // edge cases
  if (array.length === 0) {
    return 0;
  }
  // first step: compare pointer index values, if equal move j one step. if not equal i++ ,array[i] = array[j], j++
  while (j < array.length) {
    if (array[i] === array[j]) {
      j++;
    } else {
      i++;
      array[i] = array[j];
      j++;
    }
  }
  return i + 1;
};

const Cone = countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
const Ctwo = countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
const Cthree = countUniqueValues([]); // 0
const Cfour = countUniqueValues([-2, -1, -1, 0, 1]); // 4

//console.log(Cone, Ctwo, Cthree, Cfour);

// Given a sorted array of integers, and a target average, determine if array contains a pair of values that equals the target average.
// There may be more than one pair that matches the average target.

function averagePair(sortedArray, targetAverage) {
  if (sortedArray.length < 2) {
    return false;
  }
  let i = 0;
  let j = sortedArray.length - 1;
  while (i < j) {
    if (sortedArray[i] + sortedArray[j] / 2 === targetAverage) {
      return true;
    } else {
      if (sortedArray[i] + sortedArray[j] / 2 < targetAverage) {
        i++;
      } else {
        j--;
      }
    }
  }
  return false;
}
const avgP1 = averagePair([1, 2, 3], 2.5); // true

/* function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
} */

const isSubsequence = (subStr, Str) => {
  if (subStr.length > Str.length) {
    return false;
  }
  let i = 0;
  let j = 0;
  while (i < subStr.length - 1 && j < Str.length - 1) {
    if (subStr[i] === Str[j]) {
      i++, j++;
    } else {
      j++;
    }
  }
  if (i !== subStr.length - 1) {
    return false;
  } else {
    return true;
  }
};
const isSub_R1 = isSubsequence('hello', 'hello world'); // true
const isSub_R2 = isSubsequence('sing', 'sting'); // true
const isSub_R3 = isSubsequence('abc', 'abracadabra'); // true
const isSub_R4 = isSubsequence('abc', 'acb'); // false

console.log(isSub_R1, isSub_R2, isSub_R3, isSub_R4);

//analysis
//         i
// h,e,l,l,o
// h,e,l,l,o, ,w,o,r,l,d
//         j

//       i
// s,i,n,g
// s,t,i,n,g
//         j
//                      if compare true, i++,j++ , if false j++
//   i
// a,b,c
// a,c,b
//     j

//     i
// a,b,c,d
// a,c,b,c
//       j     i and j should reach end at the same time
