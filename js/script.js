'use strict';

// 1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

// 2
const arr4 = [1, 2, 3];
arr4.reverse();
console.log(arr4);

// 3
const arr5 = [1, 2, 3];
arr5.push(4, 5, 6);
console.log(arr5);

// 4
const arr6 = [1, 2, 3];
arr6.unshift(4, 5, 6);
console.log(arr6);

// 5
const arr7 = ['js', 'css', 'jq'];
console.log(arr7.shift());

// 6
const arr8 = ['js', 'css', 'jq'];
console.log(arr8.pop());

// 7
const arr9 = [1, 2, 3, 4, 5];
const arr10 = arr9.slice(0, 3);
console.log(arr10);

// 8 
const arr11 = [1, 2, 3, 4, 5];
const arr12 = arr11.slice(-2);
console.log(arr12);

// 9
const arr13 = [1, 2, 3, 4, 5];
arr13.splice(1, 2);
console.log(arr13);

// 10
const arr14 = [1, 2, 3, 4, 5];
const arr15 = arr14.slice(1, 4);
console.log(arr15);

// 11
const arr16 = [1, 2, 3, 4, 5];
arr16.splice(3, 0, 'a', 'b', 'c');
console.log(arr16);

// 12
const arr17 = [1, 2, 3, 4, 5];
arr17.splice(1, 0, 'a', 'b');
arr17.splice(6, 0, 'c');
arr17.splice(8, 0, 'e');
console.log(arr17);

// 13
const arr18 = [3, 4, 1, 2, 7];
arr18.sort();
console.log(arr18);

// 14
const arr19 = [5, 6, 7, 8, 9];
const arr19Reduced = arr19.reduce((acc, item) => {
    acc += item;
    return acc;
}, 0);
console.log(arr19Reduced);

// 15
const arr20 = [5, 6, 7, 8, 9];
const arr20Updated = arr20.map(item => item ** 2);
console.log(arr20Updated);

// 16
const arr21 = [1, -3, 5, 6, -7, 8, 9, -11];
const arr21Filtered = arr21.filter(item => item < 0);
console.log(arr21Filtered);

// 17
const arr22 = [1, -3, 5, 6, -7, 8, 9, -11];
const arr22Filtered = arr22.filter(item => item % 2 === 0);
console.log(arr22Filtered);

// 18
const arr23 =  ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const arr23Filtered = arr23.filter(item => item.length > 5);
console.log(arr23Filtered);

// 19
const arr24 = [1, 2, [3, 4], 5, [6, 7]];
const arr24SubArrays = arr24.filter(item => Array.isArray(item));
console.log(arr24SubArrays);

// 20
const arr25 = [5,-3, 6,-5, 0,-7, 8, 9];
const arr25Reduced = arr25.reduce((acc, item) => {
    if(item < 0){
        acc++;
    }
    return acc;
}, 0);
console.log(arr25Reduced);