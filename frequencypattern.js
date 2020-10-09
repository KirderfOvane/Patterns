const { PerformanceObserver, performance } = require('perf_hooks');

// frequency pattern the best way O(1)-complexity
const frequencyPattern = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyArray1 = {};
  const frequencyArray2 = {};
  for (let val of arr1) {
    frequencyArray1[val] = (frequencyArray1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyArray2[val] = (frequencyArray2[val] || 0) + 1;
  }
  for (let key in frequencyArray1) {
    if (!(key ** 2 in frequencyArray2)) {
      return false;
    }
    if (frequencyArray2[key ** 2] !== frequencyArray1[key]) {
      return false;
    }
  }
  return true;
};
const test = frequencyPattern([1, 2, 3, 6, 5, 12], [4, 1, 9, 36, 25, 144]);
//console.log(test);

/* 
    compare 2 arrays. 
    if array one item is equal as array two item but squared return true
*/

/* data:
    [1,2,3], [4,1,9]  true
    [1,2,3], [1,9]    false
    [1,2,1], [4,4,1]  false (must be same frequency)
*/
const array1 = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 1],
];
const array2 = [
  [4, 1, 9],
  [1, 9],
  [4, 4, 1],
];
/* Naive approach */
const NaivefrequencyPattern = (arrayOne, arrayTwo) => {
  comparisonArray = [];
  for (i = 0; i < arrayOne.length; i++) {
    //n
    arrayTwoCopy = [...arrayTwo[i]]; //n
    let trueCounter = 0;
    for (j = 0; j < arrayTwo.length; j++) {
      //n
      const squaredVal = arrayOne[i][j] * arrayOne[i][j];
      if (arrayTwoCopy.includes(squaredVal)) {
        const index = arrayTwoCopy.indexOf(squaredVal); //n
        arrayTwoCopy.splice(index, 1); //n
        trueCounter++;
      }
    }
    if (trueCounter === 3) {
      comparisonArray.push(true);
    } else {
      comparisonArray.push(false);
    }
  }
  return comparisonArray;
};
//console.log(NaivefrequencyPattern(array1, array2));
const t2 = performance.now();
const result = NaivefrequencyPattern(array1, array2);
const t3 = performance.now();

//console.log('Call to NaivefrequencyPattern took ' + (t3 - t2) + ' milliseconds.');
//console.log(result);

// naive algorithm O(n) complexity
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
const result2 = same([1, 2, 3], [4, 1, 9]);
//console.log(result2);
