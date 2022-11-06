/*
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
    return eval(value1 + operation + value2)
}

console.log(basicOp('+', 4, 7))
*/
/*
// Drone Fly-By

function flyBy(lamps, drone){
    let lampsArr = lamps.split(``)
    let lampsOn = lampsArr.map((x, i) => {
        // console.log(i)
        // console.log(drone.length)
        if (i < drone.length) {
            return x = 'o'
        } else {
            return x
        }
    })
    return lampsOn.join(``)
}

console.log(flyBy('xxxxxx', '====T'))
*/


// +1 Array 

/*
function upArray(arr){
  if (arr.length <= 0 || arr.some(el => el < 0 || el > 9)) {
    return null;
  }

  let i = arr.length -1;

  while (i >=0 && arr[i] == 9) {
    arr[i--] = 0
  }

  if (i < 0) {
    arr.unshift(1)
  } else {
    arr[i]++
  }
  return arr
}


console.log(upArray([4,3,2,5]))
*/


// Array ladder

// 8

function invert(array) {
  let result = array.map(el => el < 0 ? Math.abs(el) : -Math.abs(el))
  return result
}

console.log(invert([-1,2,3,4,5]))


// 7

// 6

// 7

// 8


