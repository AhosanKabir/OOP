// What is Bubble sort ?
// Bubble sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable large data set as its average and wrost-case time complexity is quite high. 
// In Bubble sort algorithm :
    /* 
        1. Traverse from left and compare adjacent elements and the heigher one is placed at right side.
        2. In this way, the largest element is moved to the rightmost end at first.
        3. This process is then continued to find the second largest and place it and so on until the data is sorted.
    */ 

// example
function  bubleSort(arr, n){
    var i , j , temp;
    var swapped ;
    
    for (i = 0; i < n - 1 ; i++){
        swapped = false ;
        for(j = 0; j < n - i - 1; j++ ){
            if (arr[j] > arr[j + 1]){

                // swap start 
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        if( swapped == false )
        break;
    }
}

function printArray(arr, size){
    var i;
    for (i = 0; i < size; i++)
        console.log(arr[i] + " ");
}

var arr = [ 64, 34, 25, 12, 22, 11, 90 ];
var n = arr.length;
bubleSort(arr, n);

console.log("Sorted array: ");
printArray(arr, n);
