function bubbleSort (array) {
    for (let i = array.length; i > 0; i--) {
        console.log('i', i)
        for (let j = 0; j < i; j++) {
            let currNum = array[j];
            let nextNum = array[j + 1];
            // console.log('CurrNum & nextNum', currNum, '&&', nextNum)
            // console.log('j', j)
            if (currNum > nextNum) {
                array.splice(j, 1);
                array.splice(j + 1, 0, currNum)
            console.log('currNum, nextNum, j', currNum, '-', nextNum, '-', j)
            } else {
                currNum = nextNum;
                nextNum =  array[j + 2];
            }
            //console.log('array Status', array)
        }
    }
    return array
  }
