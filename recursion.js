function power(base, exponent) {
  if (exponent < 1) {
    return 1;
  }
  return base * power(base, exponent - 1);
}
const test = power(4, 4);

function factorial(num) {
  if (num < 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
const test2 = factorial(12);

function productOfArray(arr) {
  if (arr.length < 1) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
const mytestst = productOfArray([5, 12]);
//console.log(mytestst);
function fib(num) {
  if (num <= 2) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}
const testss = fib(10);
//console.log(testss);
//1,1,2,3,5,8,13,21,34,55,

function flatten(arr) {
  const result = [];
  function helper(innerArr) {
    if (innerArr.length === 0) {
      return;
    }

    if (typeof innerArr[0] === 'number') {
      result.push(innerArr[0]);
    }

    if (typeof innerArr[0] === 'object') {
      helper(innerArr[0]);
    }

    helper(innerArr.slice(1));
  }
  helper(arr);
  return result;
}
const flattentest = flatten([1, 2, 3, [4, 5]]);
//console.log(flattentest);
const flatten2 = flatten([1, [2, [3, 4], [[5]]]]);
//console.log(flatten2);
const flatten3 = flatten([[1], [2], [3]]);
//console.log(flatten3);
const flatten4 = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);
//console.log(flatten4);

function capitalizeFirst(arr) {
  // value collector
  const result = [];
  function helper(innerArr) {
    //base case
    if (innerArr.length === 0) {
      return;
    }
    //logic
    const firstChar = innerArr[0][0].toUpperCase();
    const restOfString = innerArr[0].slice(1);
    result.push(firstChar + restOfString);
    // recursion
    return helper(innerArr.slice(1));
  }
  helper(arr);
  return result;
}

const capfirst = capitalizeFirst(['car', 'taco', 'banana']); // ['Car','Taco','Banana']
//console.log(capfirst);

// Return the sum of all even numbers in an object which may contain nested objects
function nestedEvenSum1(object) {
  // value collector
  let sum = 0;

  function helper(obj) {
    console.log('###');
    console.log(obj);
    // base case
    if (Object.keys(obj).length === 0) {
      if (typeof obj === 'number' && obj % 2 === 0) {
        sum = sum + obj;
      }
      return;
    }
    // console.log(typeof obj[Object.keys(obj)[0]]);
    console.log(typeof Object.keys(obj).splice(1));
    //logic
    // console.log(Object.values(obj));
    /* if (typeof obj === 'object') {
      helper(obj);
    } */
    //const objKey = Object.keys(obj)[0];
    //const objVal = obj[objKey];
    /*  if (typeof objVal === 'string') {
      const valToString = objVal.toString();
      // console.log(obj);
    } */
    //console.log(typeof obj.objVal);
    /* if (typeof obj[objKey] !== 'number') {
      console.log(typeof obj.obj[objKey]);
    } */
    /*   if (obj[objKey] === 'object') {
      helper(obj[objKey]);
    } else if (typeof obj[objKey] === 'number' && obj[objKey] % 2 === 0) {
      sum = sum + obj[objKey];
    } */

    // recursion
    helper(Object.keys(obj).splice(1));
  }
  helper(object);
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

//const testN1 = nestedEvenSum(obj1); // 6
//const testN2 = nestedEvenSum(obj2); // 10
//console.log(testN1, testN2);
//console.log(Object.keys(obj1.outer).length);
//console.log(Object.keys(obj1).length === 0);
//console.log(typeof obj1.outer === 'number' && obj1.outer % 2 === 0);
//console.log(Object.keys(obj1).splice(1));
//console.log(typeof obj1[Object.keys(obj1)[1]]);
//console.log(Object.keys(obj1));
//console.log(Object.values(obj1));

//%%%%%%%%%%%%

/* function recursiveRange(num){

  if(num < 1){return 0}

  return num + recursiveRange(num-1)

}

const test = recursiveRange(10) // 21



function fib(n){

  if (n <= 2) return 1;

  return fib(n-1) + fib(n-2);

}
 */

function nestedEvenSum(object) {
  let result = 0;

  function helper(obj) {
    // base case
    console.log('###########');
    console.log(obj);
    if (obj === undefined || typeof obj === 'boolean') {
      return;
    }
    const actualObj = obj[Object.keys(obj)[0]];
    // console.log(actualObj);

    // add even numbers to result
    if (typeof actualObj === 'number' && actualObj % 2 === 0) {
      //  console.log('number found: ' + actualObj);
      result = result + actualObj;
    }

    // if object
    if (typeof actualObj === 'object') {
      // console.log('subobject found');
      // console.log(actualObj);
      helper(actualObj);
    }

    // if more then one key
    /* if (Object.keys(obj).slice(1).length > 1) {
      //console.log(Object.keys(obj)[1]);
      return helper(obj[Object.keys(obj)[1]]);
    } */
    //console.log(Object.keys(obj).slice(1));
    console.log('removing: ' + Object.keys(obj)[0]);
    return helper(obj[Object.keys(obj).slice(1)]);
  }

  helper(object);
  return result;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

const sum = nestedEvenSumNeat(obj1); // 6

console.log(sum);

var obj2 = {
  a: 2,

  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },

  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },

  d: 1,

  e: { e: { e: 2 }, ee: 'car' },
};

//const whathwat = nestedEvenSum(obj1); // 10

//console.log('result: ' + whathwat);

//console.log(typeof obj2[Object.keys(obj2)[0]])
function nestedEvenSumNeat(element) {
  console.log('###');
  console.log(Object.values(element));
  if (element % 2 === 0) {
    return element;
  } else if (element && typeof element === 'object') {
    return Object.values(element).reduce((sum, value) => sum + nestedEvenSumNeat(value), 0);
  } else {
    return 0;
  }
}
