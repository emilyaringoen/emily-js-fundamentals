// Define a function named sum that takes in one argument.
//    arr (array of numbers)
//
// Return the sum of all of the numbers in the array. For example, given
// [1, 2, 3, 4], then return 10. If the array is empty, return 0.
function sum(arr) {
    var sum = 0;
    //
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    //
    return sum;
}

// // Define a function named product that takes in one argument.
// //    arr (array of numbers)
// //
// // Return the product of all of the numbers in the array. For example, given
// // [1, 2, 3, 4], then return 24. If the array is empty, return 1.
function product(arr) {
    // YOUR CODE HERE
    var total = 1;
    for (var i = 0; i < arr.length; i++) {
        total *= arr[i];
    }
    return total;
}
//
// // Define a function named concatenate that takes in one argument.
// //    arr (array of strings)
// //
// // Return the concatenation of all the strings in the array. For example, given
// // ['hello', 'my', 'name', 'is', 'ken'], then return 'hellomynameisken'. If the
// // array is empty, return ''.
function concatenate(arr) {
    return arr.join('');
}
//
// // Define a function named repeat that takes in two arguments.
// //     str (string)
// //     times (number)
// //
// // Return a new string containing times copies of the input str. For example,
// // given 'hi' and 4, then return 'hihihihi'.
function repeat(str, times) {
    var newStr = "";
    for (var i = 0; i < times; i++) {
        newStr += str;
    }
    return newStr;
}
//
// // Define a function named filterPassingGrades that takes in one argument.
// //     grades (array of numbers)
// //
// // Return a new array with any grade less than 70 filtered out. For example,
// // given [88, 67, 70, 92, 53], then return [88, 70, 92].
// /*function filterPassingGrades(grades) {
//     var newGrades = [];
//     for (var i = 0; i < grades.length; i++) {
//         if (grades[i] >= 70) {
//             newGrades.push(grades[i]);
//         }
//     }
//     return newGrades;
// }*/
//
function filterPassingGrades(grades) {
    function goodEnough(value) {
        return value >= 70;
    }
    var newg = grades.filter(goodEnough);
    return newg;
}
//
//
//
// // Define a function named replace that takes in three arguments.
// //    arr (array of numbers)
// //    from (number)
// //    to (number)
// //
// // Return a new array of numbers where all from elements are replaced with to.
// // For example, given [1, 3, 2, 1, 3], 1, and 4, then return [4, 3, 2, 4, 3].
function replace(arr, from, to) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === from) {
            newArr.push(to);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
// // function replace (arr, from, to) {
// //   var re = new RegExp(from, "g")
// //   return arr.join('').replace(re, to).split('');
// // }
//
//
//
// // Define a function named flatten that takes in one argument.
// //     arr (array of arrays)
// //
// // Return a new array that combines all of elements of each inner array. For
// // example, given [[1], [2, 3], [4]], then return [1, 2, 3, 4].
// //
// // Tip: You only need to flatten one level deep.
// //
// // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// //
function flatten(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            newArr.push(arr[i][j]);
        }
    }
    return newArr;
}
// function flatten(arr) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     newArr = newArr.concat(arr)
//   }
//
// }
//
//
//
// // Define a function named max that takes in one argument.
// //    arr (array of numbers)
// //
// // Return the maximum number in the array. For example, given [1, 2, -3, 4],
// // then return 4. If the array is empty, return -Infinity.
// //
// // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
//
function max(arr) {
    return Math.max.apply(null, arr);
}
//
//
// // Define a function named min that takes in one argument.
// //    arr (array of numbers)
// //
// // Return the minimum number in the array. For example, given [1, 2, -3, 4],
// // then return -3. If the array is empty, return Infinity.
// //
// // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
function min(arr) {
    return Math.min.apply(null, arr);
}
//
//
//
// // Define a function named mean that takes in one argument.
// //    arr (array of numbers)
// //
// // Return the mean (i.e. average) of all of the numbers in the array. For
// // example, given [1, 2, 6], then return 3. If the array is empty, return null.
//
function mean(arr) {
    var total = 0;
    if (arr.length <= 0) {
        return null;
    } else {
        for (var i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total / arr.length;
    }
}
//
//
// // Define a function named median that takes in one argument.
// //    arr (array of numbers)
// //
// // Return the median of all of the numbers. For example, given [1, 2, 6], then
// // return 2. Also, if given [1, 2, 6, 8], return 4. If the array is empty,
// // return null.
// //
// // Tip: Use Google to learn more about calculating the median.
// // Tip: The given array may not be sorted.
// //
// // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//
function median(arr) {
    if (arr.length <= 0) {
        return null;
    } else {
        var sorted = arr.sort();
        if (sorted.length % 2 !== 0) { //if odd
            return sorted[((sorted.length - 1) / 2)];
        } else {
            var newArr = [];
            newArr.push(sorted[Math.floor((sorted.length - 1) / 2)]);
            newArr.push(sorted[Math.ceil((sorted.length - 1) / 2)]);
            return (newArr[0] + newArr[1]) / 2;
        }
    }
}
//
//
// // Define a function named contains that takes in two arguments.
// //     arr (array of strings)
// //     str (string)
// //
// // Return true if that string exists in the array, otherwise false.
//
function contains(arr, string) {
    if (arr.indexOf(string) > -1) {
        return true;
    } else {
        return false;
    }
}
//
//
// // Define a function named  that takes in two arguments.
// //    point1 (object)
// //    point2 (object)
// //
// // Assume each point argument has the following format.
// //    { x: NUMBER, y: NUMBER }
// //
// // Return the  between the two points on a Cartesian coordinate system.
// // For example, given { x: 3, y: 2 } and { x: 9, y: 7 }, then return
// // approximately 7.810249675906654.
// //
// // Tip: Use Google to learn more about calculating the .
//
function distance(point1, point2) {

    var num1 = point2.x - point1.x;
    var num2 = point2.y - point1.y;

    return Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2));

}
//
//
//
//
// // Define a function named combine that takes in two arguments.
// //    obj1 (object)
// //    obj2 (object)
// //
// // Return a new object that has the key-value pairs of both objects. For
// // example, given { a: 1 } and { b: 2 }, then return { a: 1, b: 2 }.
// // If there's a key in more than one object,
// // the latest object to have the key will determine the value. For example,
// // given {c: 3} and {c: 4}, then return {c: 4}.
//
function combine(obj1, obj2) {
  var newObj = Object.assign(obj1, obj2);
  return newObj;
}
//
// // Define a function called invert that takes in one argument.
// //    obj (object)
// //
// // Return a new object where the keys and values of the argument are inverted.
// // For example, given { a: 1, b: 2 }, then return { '1': 'a', '2': 'b' }.
//
function invert(obj) {
    var newObj = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[obj[key]] = key;
        }
    }
    return newObj;
}
//
//
// // Define a function named values that takes in one argument.
// //    obj (object)
// //
// // Return an array of the values of the object. For example, given
// // { a: 1, b: 2, c: 3 }, then return [1, 2, 3].
//
function values(obj) {
    var arr = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(obj[key]);
    }
  }
    return arr;
}
//Object.values(obj) method would do this!

// Define a function called toPairs that takes in one argument.
//    obj (object)
//
// Return a new array where each element is key-value pair array of the
// argument. For example, given { a: 1, b: 2 }, then return
// [['a', 1], ['b', 2]].

function toPairs (obj) {
  var newArray = [];
  for (var i in obj) {
    newArray.push([i, obj[i]]);
  }

  return newArray;
}



// Define a function called fromPairs that takes in one argument.
//    arr (array)
//
// Return a new object where each key-value pair is from an element in the
// argument. For example, given [['a', 1], ['b', 2]], then return
// { a: 1, b: 2 }.
function fromPairs (arr) {
var newObj = {};
    for (var i = 0; i < arr.length; i++) {
      var innerArr = arr[i];
        newObj[innerArr[0]] = innerArr[1];
    }
  return newObj;
}
