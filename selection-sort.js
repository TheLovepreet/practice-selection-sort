

function selectionSort(arr) {

  // Copy the original array
  let newArr = arr.concat();
  let sorted = [];
  while(newArr.length !== 0){
    console.log(sorted.join(","));

  let min = newArr[0];
  for(let i = 1; i < newArr.length; i++){
    if(newArr[i] < min){
      min = newArr[i];
    }
  }
  sorted.push(min);
  newArr.splice(newArr.indexOf(min),1);
}
return sorted;
  /* Create an array to store the sorted values
   While the array is not empty...
   Do not move this console.log
     Find the index of the minimum value in the unsorted half
     Save and remove the value at the min index
     Add the min value to the end of the sorted array
*/
}



function selectionSortInPlace(arr) {
  for(let divider = 0; divider < arr.length; divider++){
    console.log(arr.join(','));
    let min = arr[divider];
    let minIndex = 0;
    for(let j = divider + 1; j < arr.length; j++){
      if(arr[j] <  min){
        min = arr[j];
        minIndex = j;
      }
    }
    let Index = minIndex;
    while(Index > divider){
      arr[Index] = arr[Index-1];
      Index--;
    } 
    arr[divider] = min;
    }
  //[2,4,6,8,1,3,5,7,9]




  // Set a pointer at zero diving the array into sorted and unsorted halves
  // Repeat while the unsorted half is not empty:
    // Do not move this console.log
    // Find the index of the minimum value in the unsorted half
    // Save the min value
    // Shift every unsorted value to the left of the min value to the right by 1
    // Put the min value at the divider
    // Increment the divider and repeat
}


module.exports = [selectionSort, selectionSortInPlace];
