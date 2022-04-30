const {log, count, table} = console;


// const grid1 = [
//     ["6", ".", ".", "1", "4", ".", ".", "2", "."],
//     [".", ".", "6", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", "1", ".", ".", ".", ".", ".", "."],
//     [".", "6", "7", ".", ".", ".", ".", ".", "9"],
//     [".", ".", ".", ".", ".", ".", "8", "1", "."],
//     [".", "3", ".", ".", ".", ".", ".", ".", "6"],
//     [".", ".", ".", ".", ".", "7", ".", ".", "."],
//     [".", ".", ".", "5", ".", ".", ".", "7", "."],
// ];
//
// // the output should be false
// const grid2 = [
//     [".", ".", ".", ".", "2", ".", ".", "9", "."],
//     [".", ".", ".", ".", "6", ".", ".", ".", "."],
//     ["7", "1", ".", ".", "7", "5", ".", ".", "."],
//     [".", "7", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", "8", "3", ".", ".", "."],
//     [".", ".", "8", ".", ".", "7", ".", "6", "."],
//     [".", ".", ".", ".", ".", "2", ".", ".", "."],
//     [".", "1", ".", "2", ".", ".", ".", ".", "."],
//     [".", "2", ".", ".", "3", ".", ".", ".", "."],
// ];
//
// function solution(grid) {
//     const subGrids = [];
//
//     for(let i=0; i<grid.length; i++){
//
//         const rowItems = [];
//         const columnItems = [];
//         for(let j=0; j<grid.length; j++){
//
//             if(rowItems.includes(grid[i][j]) || columnItems.includes(grid[j][i])) return false;
//
//             if(grid[i][j] !== "."){
//                 rowItems.push(grid[i][j])
//             }
//
//             if(grid[j][i] !== "."){
//                 columnItems.push(grid[j][i])
//             }
//         }
//     }
//
//     let i=0;
//     let j=0;
//     for(let k=0; k<grid.length; k++){
//         const newArr = [];
//         let iLength = i + 3;
//         let jLength = j + 3;
//
//         for(i; i<iLength; i++) {
//             for(j; j<jLength; j++) {
//                 if(newArr.includes(grid[i][j])) return false;
//
//                 if(grid[i][j] !== "."){
//                     newArr.push(grid[i][j])
//                 }
//             }
//         }
//         j += 3
//         if(j === 9){
//             j = 0;
//             i += 3
//         }
//     }
//
//     return true;
//
// }
//
// console.log(solution(grid1)); // true
// // console.log(solution(grid2)); // false

/*

00 01 02   03 04 05   06 07 08
10 11 12   13 14 15   16 17 18
20 21 22   23 24 25   26 27 28

30 31 32   33 34 35   36 37 38
40 41 42   43 44 45   46 47 48
50 51 52   53 54 55   56 57 58

60 61 62   63 64 65   66 67 68
70 71 72   73 74 75   76 77 78
80 81 82   83 84 85   86 87 88

*/
// =========================================================================================

// the output should be true
const roadRegister1 = [
    [false, true, false, false],
    [false, false, true, false],
    [true, false, false, true],
    [false, false, true, false],
];

// the output should be true
const roadRegister2 = [
    [false, true, false, false, false, false, false],
    [true, false, false, false, false, false, false],
    [false, false, false, true, false, false, false],
    [false, false, true, false, false, false, false],
    [false, false, false, false, false, false, true],
    [false, false, false, false, true, false, false],
    [false, false, false, false, false, true, false],
];

// the output should be false
const roadRegister = [
    [false, true, false],
    [false, false, false],
    [true, false, false],
];

function solution(roadRegister) {

    const roads = Array.from({ length: roadRegister.length }, () => {
        return {from:0, to:0}
    })

    // for(let i=0; i<roadRegister.length; i++){
    //     for(let j=0; j<roadRegister[i].length; j++){
    //
    //         if(!roadRegister[i][j]) continue;
    //
    //         roads[i].from += 1;
    //         roads[j].to += 1;
    //     }
    // }

    roadRegister.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            if(column) return;

            roads[rowIndex].from += 1;
            roads[columnIndex].to += 1;
        })
    })

    return roads.every(item => {
        return item.from === item.to
    })
}

log(solution(roadRegister))
log(solution(roadRegister1))
log(solution(roadRegister2))