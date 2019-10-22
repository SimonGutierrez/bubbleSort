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