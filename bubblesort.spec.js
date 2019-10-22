describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('sorts an array', function(){
        expect( bubbleSort([7, 3, 1, 9, 2]) ).toEqual( [1, 2, 3, 7, 9] );
      });
  });
