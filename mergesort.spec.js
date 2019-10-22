describe('Split Array function', function () {
    it('is able to split an array into two halves', function () {
        expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]])
    });

    it('is able to split odd length arrays', function () {
        expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]])
    })
});

describe('Merge Array Function', function () {
    it('it merges two arrays into a sorted array', function () {
        expect(merge([[3], [1]])).toEqual([1, 3])
    })
})

describe('Merge & Sort Array Function', function () {
    it('it returns a correctly sorted array', function () {
        expect(mergeSort([3, 5, 7, 2, 44, 55, 22, 455])).toEqual([2, 3, 5, 7, 22, 44, 55, 455])
    })
})
