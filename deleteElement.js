let arr = [1,6,7,89,6,3];

let tiffo = [8,5,7,59,7,4];


let newArr = [8,5,7,59,7,4];

// const removeSorter = (index) => {
//     let acc = [];
//     return arr.filter((elem, ind) => {
//         if (ind !== index) {
//             acc = [...acc, elem];
//         }
//         arr = acc;
//         return arr;
//     });
// };


const removeArr = (index) => tiffo.filter((elem, ind) => (ind !== index) ? tiffo = [...tiffo, elem] : tiffo);

const reduceArr = (index) => newArr.reduce((acc, elem, ind) => (ind !== index) ? acc = [...acc, elem] : newArr = acc, []);

// const reduceArr = (index) => {
//     return newArr.reduce((acc, elem, ind) => {
//         if (ind !== index) {
//             acc = [...acc, elem]
//         }
//
//         return  newArr = acc;
//     }, []);
// };

// const t = removeSorter(2);
// removeSorter(2);
// console.log(arr);

removeArr(2);
console.log(newArr);

reduceArr(3);
console.log(newArr);