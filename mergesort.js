function split(arr) {
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)
    return [left, right]
}

function merge(arr) {
    const left = arr[0]
    const right = arr[1]
    const total = left.length + right.length
    const result = [];
    for (let i = 0; i < total; i++) {
        if (left[0] < right[0] || !right.length) {
            result.push(left.shift())
        } else {(
            result.push(right.shift())
        )}
    }

    return result
}

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    } else {
         let left = split(array)[0];
         let right = split(array)[1];
         return merge([mergeSort(left), mergeSort(right)] )
    }
  }
