//******************** ================ map method (array) ================ ********************
// basic ----------------------->
const arr = [1,2,3,4,5];

const squareArr = arr.map( (item) => {
    return item * item ;
});

const squareArrByMath = arr.map( (item) => {
    return Math.pow(item, 2) ;
});
// console.log(squareArr);
// console.log(squareArrByMath);

// map methods can accept three arguments = element , index, fullarray ----------------------->

const arr1 = [2,6,3,9,12,1]
const fullMapMethod = arr1.map((output, index, fullArray)=>{
    const sqrt = output * output
    // console.log(
    //     `
    //         Item: ${output} ; 
    //         squareValue:${sqrt};
    //         IndexNumber: ${index};
    //         orginalArray: ${fullArray};
    //     `
    // );

    return sqrt ;
});

// console.log(fullMapMethod);


//******************** ================ filter method (array) ================ ********************
// filter works based on true or false value 

const arr2 = [2,6,3,9,12,1];

const filterArr = arr2.filter((item)=> {
    return item % 2 == 0 ;
});

// console.log(filterArr);

//******************** ================ Reduce method (array) ================ ********************

const arr3 = [2,6,3,9,12,1];
const reduceArr = arr3.reduce((sum, item)=>{
    return sum += item;
}, 0);

// console.log(reduceArr);