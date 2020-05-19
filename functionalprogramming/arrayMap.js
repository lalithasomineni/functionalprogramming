var arr = [1,2,3];//original array


var arr1 = ([...arr,4]);//mapping an array without muting the originl array

console.log(arr1);

var arr2 = ([...arr1,5])

console.log(arr2)

var arr3 = ([...arr,4,7,8])

console.log(arr3);

//creating another empty array with the given array without muting it

var arr4 = new arr(); //arr4 is the empty array