

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
  // Create an array to store the sorted values

  // While the array is not empty...

    // Do not move this console.log

    // Find the index of the minimum value in the unsorted half

    // Save and remove the value at the min index

    // Add the min value to the end of the sorted array

}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves

  // Repeat while the unsorted half is not empty:

    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half

    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat

}


module.exports = [selectionSort, selectionSortInPlace];
