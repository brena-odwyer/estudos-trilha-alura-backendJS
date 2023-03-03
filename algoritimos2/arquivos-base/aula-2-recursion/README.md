Merge sort is a popular algorithm used for sorting arrays or lists of elements. The basic idea behind merge sort is to divide the input array into smaller sub-arrays, sort those sub-arrays recursively, and then merge them back together to produce the final sorted array.

Here are the steps of the merge sort algorithm:

Divide the unsorted list into n sub-lists, each containing one element (a list of one element is considered sorted).

Repeatedly merge sub-lists to produce new sorted sub-lists until there is only one sub-list remaining. This will be the sorted list.

The key operation in merge sort is the merging of two sorted sub-arrays into a larger sorted array. This is accomplished by comparing the first element of each sub-array and appending the smaller one to the output array. The process is repeated until all elements have been merged into the output array.

One advantage of merge sort is that it has a guaranteed worst-case time complexity of O(nlog(n)), meaning that it will always take at most nlog(n) steps to sort an array of n elements. However, merge sort does require additional memory to store the sub-arrays during the sorting process.

Exemple:
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  // Divide the array in half
  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);

  // Recursively sort the left and right sub-arrays
  const leftSorted = mergeSort(leftArray);
  const rightSorted = mergeSort(rightArray);

  // Merge the sorted sub-arrays back together
  return merge(leftSorted, rightSorted);
}

function merge(leftArray, rightArray) {
  const resultArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      resultArray.push(leftArray.shift());
    } else {
      resultArray.push(rightArray.shift());
    }
  }

  // Concatenate any remaining elements from the left and right arrays
  return resultArray.concat(leftArray, rightArray);
}

