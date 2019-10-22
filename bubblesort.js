let counter = 0

// function swap(array, j, currNum) {
//     array.splice(j, 1);
//     array.splice(j + 1, 0, currNum)
//     counter ++
//     console.log('counter: ', counter)
//     return counter
// }

// function comparisons(){

// }


function bubbleSort (array) {
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (currNum > nextNum) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            } else {
                currNum = nextNum;
                nextNum =  array[j + 2];
            }
        }
    }
    return array
  }


