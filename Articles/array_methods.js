let array1 = ['mango', 25, true, 'ball', 2.5];
// console.log(array1);

// Methods

// // .length
// let length1 = array1.length;
// console.log(length1);

// // .push()
// array1.push("push1");
// console.log(array1);

// // slice
// console.log(array1.slice(1,4));

// // splice
// array1.splice(2, 1, "Lemon", 110);
// console.log(array1);

// // .pop()
// let pop1 = array1.pop();
// console.log(pop1);

// console.log(array1);

// // concat()
// let array2 = [11, 22, 33];
// let array3 = ['A', 'B', 'C'];
// let concat1 = array1.concat(array2, array3);

// console.log(concat1);
// console.log(array1);

// // shift()
// let shift1 = array1.shift();
// console.log(shift1);
// console.log(array1);

// // unshift
// array1.unshift('added1','added2');
// console.log(array1);

// // delete
// delete array1[1];
// console.log(array1);
// console.log(array1[1]);

// array1[1] = "new-value";
// console.log(array1);
// console.log(array1[1]);

// // fill()
// array1.fill('fill1', 1, 4);
// console.log(array1);

// // indexOf()
// let indexOf1 = array1.indexOf(2.5);
// console.log(array1);
// console.log(indexOf1);

// let indexOf1 = array1.indexOf(true);
// console.log(indexOf1);

// // lastIndexOf()
// array1.push('mango');
// console.log(array1);
// let lastIndexOf1 = array1.lastIndexOf('mango');
// console.log(lastIndexOf1);

// array1.push('mango');
// console.log(array1);
// let lastIndexOf1 = array1.lastIndexOf('mango', 4);
// console.log(lastIndexOf1);

// // includes()
// let includes1 = array1.includes(25);
// console.log(includes1);

// let includes2 = array1.includes('apple');
// console.log(includes2);

// // isArray
// let isArray1 = Array.isArray(array1);
// console.log(isArray1);

// let array2 = true;
// let isArray2 = Array.isArray(array2);
// console.log(isArray2);

// // join()
// let join1 = array1.join();
// console.log(join1);

// let join2 = array1.join('_$$$ ');
// console.log(join2);

// // map()
// let array4 = [1, 3, 5, 7]
// function myFunction(num) {
//     return Math.pow(num, 3)
// }
// let map1 = array4.map(myFunction)
// console.log(map1);

// // reverse()
// let array4 = [1, 3, 5, 7]
// array4.reverse();
// console.log(array4);

// // find()
// function myFunction(ele){
//     if (ele > 18){
//         return ele
//     }
// }
// let find1 = array1.find(myFunction)
// console.log(find1);
// console.log(array1);
// // After unshift a value that pass test
// array1.unshift(40);
// let find2 = array1.find(myFunction)
// console.log(find2);
// console.log(array1);

// // sort()
// let sort1 = array1.sort();
// console.log(sort1);
// console.log(array1);

// // Array.from()
// let str2 = 'jeetu Dewangan';
// let new1 = Array.from(str2);
// console.log(new1);

// // Practices Practices Practices Practices Practices Practices Practices
// let slice1 = array1.slice(300, 3002);
// console.log(slice1);
// console.log(array1);

// let splice1 = array1.splice(2, 0, "new-2", 'new-3')
// console.log(splice1);
// console.log(array1);

// let includes1 = array1.includes('25'); // ===
// console.log(includes1);

// array1.push(false);
// let sort1 = array1.sort();
// console.log(sort1);
// let reverse1 = array1.reverse();
// console.log(reverse1);
console.log(array1);

// let fill1 = array1.fill(35,'jj', 1); // fill(<value>, start, end)
// console.log(array1);

// delete(array1[2])
// console.log(array1);
// console.log(array1[2]);

// let join1 = array1.join(' +++ ')
// console.log(join1);

// let string1 = 'https://course.masaischool.com/quizzes/581'
// let split1 = string1.split('/')
// // split1[1] = split1[1].split('/')
// // split1[0].concat(split1[1].split('/'))
// console.log(split1);

// // array1.unshift(42)
// let find1 = array1.findIndex((ele) => ele>18);
// console.log(find1);

let arr2 = [52, 53, 54, 60]
// let reduce1 = arr2.reduce((ele1, ele2) => ele1 < ele2)
// console.log(reduce1);

// let filter1 = arr2.filter(ele => ele>58)
// console.log(filter1);

// let every1 = arr2.some(ele=>55>ele)
// console.log(every1);

// let num1 = 'aa2';
// console.log(typeof num1); 

// for (let ele of array1){      // for ___ of
//     if (typeof ele == 'boolean') {
//         console.log(ele);
//     }
// }

let arr3 = [2 ,[5, ['web'], 'dev'], 2.5]
console.log(arr3[1][1][0]);


