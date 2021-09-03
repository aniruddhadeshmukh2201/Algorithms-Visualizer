export function genAnimations(array) {
    const animations = []
    console.log(array);
    if(array.length <= 1) return array; 
    const auxArray = array.slice();
    mergSortHelper(array, 0, array.length-1, auxArray, animations);
    return animations;
}
function mergSortHelper(mainArray, start, end, auxArray, animations) {
    if(start === end) return; 
    const mid = Math.floor((start+end)/2);
    mergSortHelper(auxArray, start, mid, mainArray, animations);
    mergSortHelper(auxArray, mid+1, end, mainArray, animations);
    doMerge(mainArray, start, mid, end, auxArray, animations);
}


function doMerge(mainArray, start, mid, end, auxArray, animations) {
    let i = start, j = mid+1, k = start;
    while(i <= mid && j<=end) {
        animations.push([i, j]);
        animations.push([i, j]);
        if(auxArray[i] <= auxArray[j]) {
            animations.push([k, auxArray[i]]);
            mainArray[k++] = auxArray[i++];
        } else {
            animations.push([k, auxArray[j]]);
            mainArray[k++] = auxArray[j++];
        }
    }
    while(i <= mid ) {
        animations.push([k, k]);
        animations.push([k, k]);
        animations.push([k, auxArray[i]]);
        mainArray[k++] = auxArray[i++];
    }
    while(j <= end ) {
        animations.push([k, k]);
        animations.push([k, k]);
        animations.push([k, auxArray[j]]);
        mainArray[k++] = auxArray[j++];
    }
}




export function genQuickAnimations(array) {
    let animations = [];
    console.log("from genQuickAnimations: ", array);
    if(array.length <= 1) return array;
    let auxArray = array.slice();
    quickSortHelper(auxArray, 0, array.length-1, animations);
    console.log("auxArray after quicksort: ", auxArray);
    return animations;
}

function quickSortHelper(mainArray, low, high, animations) {
    if(low < high) {
        let pi;
        // console.log("here");
        pi = partition(mainArray, low, high, animations);
        // console.log(pi);
        quickSortHelper(mainArray, low, pi-1, animations );
        quickSortHelper(mainArray, pi+1, high, animations);
    }
}

function partition(arr, start, end, animations){
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            animations.push([i, arr[pivotIndex]]);
            animations.push([pivotIndex, arr[i]]);
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
    }
    animations.push([pivotIndex, arr[end]]);
    animations.push([end, arr[pivotIndex]]);
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};

export function quick(array, low, high){
    return qshelper(array, low, high);
} 

function qshelper(mainArray, low, high) {
    if(low < high) {
        let pi;
        // console.log("here");
        pi = partition2(mainArray, low, high);
        console.log(pi);
        qshelper(mainArray, low, pi-1);
        qshelper(mainArray, pi+1, high);
    }
    return mainArray;
}

function partition2(arr, start, end){
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
    }
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
};