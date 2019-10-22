// function swap(array, j, currNum) {
//     array.splice(j, 1);
//     array.splice(j + 1, 0, currNum)
//     counter ++
//     console.log('counter: ', counter)
//     return counter
// }

// function comparisons(){

// }


// function bubbleSort (array) {
//     for (let i = array.length; i > 0; i--) {
//         for (let j = 0; j < i; j++) {
//             let currNum = array[j];
//             let nextNum = array[j + 1]
//             if (currNum > nextNum) {
//                 [array[j], array[j + 1]] = [array[j + 1], array[j]]
//             }
//         }
//     }
//     return array
//   }

  function bubbleSort (array) {
    let complete;

    while (!complete) {
        complete = true;
    for (let j = 0; j < array.length; j++) {
        // let currNum =
        // let nextNum =
        if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
            complete = false;
        }
    }
  }
    return array
}
