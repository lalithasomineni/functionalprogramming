# functionalprogramming(fp)
### pure functions
- pure function is one of the principles for fp
   - A function must return the same output for same input.
   - It should not have sideEffects i.e..,modifing a mutable object,reassigning variables all these .
   - we should consider everything as immutable in fp for best practise.
   - A void function is basically impure no arguments taken.i.e..func()]
   # what not to use
### Loops
- while
- do...while
- for
- for...of
- for...in
- Variable declarations with var or let
- Void functions
- Object mutation (for example: o.x = 5;)
- Array mutator methods
- copyWithin
- fill
- pop
- push
- reverse
- shift
- sort
- splice
- unshift
### Map mutator methods
- clear
- delete
- set
- Set mutator methods
- add
- clear
- delete
### what i learnt
 - array.map (copy item of an array into another i.e.., avoided mutating an array)
 - array filter(get the items we want from an array without mutating the original one)
 - array slice(slice a particular item from an array)
 - array concat (instead of using push we need to use array concat to avoid mutating).(push is not a best practise in fp)
 - array splice(splce is similar to slice).
 - array split(can split a string into an array).
 - array join(array to str)
 - in both array split and join regex are very helpful.
 - there are methods like sort (sort an array)
                           - every(every element in an array meets a criteria)
                           - some(to check if any element in an array meets a criteria)
# A callBack is a function ,a pieece of executeble codee thats passed into a function as an argument.and used in that function 
