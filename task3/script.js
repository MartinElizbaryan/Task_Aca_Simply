const { log, count, table, dir, group } = console;

// Example
// For chessPlayers = 4 and finishedMatches = [[0, 1], [1, 2], [2, 0]]
// the output should be
// solution(chessPlayers, finishedMatches) = [[0, 3], [1, 3], [2, 3]]

const solution = (chessPlayers, finishedMatches) => {
    const haveToPlay = [];
    for(let i=0; i<chessPlayers; i++){
        for(let j=i+1; j<chessPlayers; j++){

            const findItem = finishedMatches.find(item => {
                return (item.includes(i) && item.includes(j))
            })

            if(findItem === undefined) {
                haveToPlay.push([i,j])
            }

        }
    }
    return haveToPlay;
};

log(solution(4, [[0, 1], [1, 2], [2, 0]]))


// ========================================================================


const isAboveZero = (num) => {
    return Math.abs(num) === num
}

const itemAddByReferece = (sortedArray, arr, isPlus = true) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === true) continue;

        for(let j=0;j<arr[i].length; j++){
            if(isPlus){
                sortedArray.push(i);
            }else{
                sortedArray.unshift(i * -1);
            }
        }
    }
}


const sortWithOutSymbols = (arr) => {
    const maxLength = Math.max(...arr) - Math.min(...arr) + arr.length
    const sortedArrayPlus = Array.from({ length: maxLength }, () => {
        return true;
    })
    const sortedArrayMinus = Array.from({ length: maxLength }, () => {
        return true;
    })

    for(let i=0; i<arr.length; i++){
        let number = arr[i];
        let referenceArr;

        if(isAboveZero(number)){
            referenceArr = sortedArrayPlus;
        }else{
            referenceArr = sortedArrayMinus;
            number = Math.abs(number);
        }

        if(referenceArr[number] === true){
            referenceArr[number] = [true];
        }else{
            referenceArr[number].push(true);
        }

    }
    const sortedArray = [];

    itemAddByReferece(sortedArray, sortedArrayMinus, false);
    itemAddByReferece(sortedArray, sortedArrayPlus);

    return sortedArray
}


// let arr = [1,2,7,3,5,8,5,6,8];
// let arr1 = [1,1,1,1];
// let arr2= [1,2,3];
// let arr3= [-1, -2,-3];
// let arr4= [-1, -2,-3, 0];
// let arr5= [1,2,-7,3,5,8,-5,6,8];
// log(sortWithOutSymbols(arr));
// log(sortWithOutSymbols(arr1));
// log(sortWithOutSymbols(arr2));
// log(sortWithOutSymbols(arr3));
// log(sortWithOutSymbols(arr4));
// log(sortWithOutSymbols(arr5));