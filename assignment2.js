//============ Q1.Implement Binary Search ============//
 function binarySearch(arr,key) 
{
    var cnt = 0;
    var n = arr.length
    var lower = 0;
    var upper = n-1;
    var mid;
   while ( lower <= upper){
       cnt += 1;
       mid = parseInt((lower + upper)/2);
       if( arr[mid] === key){
           console.log(cnt);
           return mid
       }
       else if (arr[mid] > key){
        upper = mid - 1;
       }
       else{
           lower = mid + 1;
       }
   }
   console.log(cnt);
   return -1
}

var _binarySearch = binarySearch([4,5,6,7,11,12,14,16,20],4);

console.log(_binarySearch);

//============ Q2. Implement Merge Sort ================//
const merging = (arr1,arr2) => {
    var result = [], i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else{
            result.push(arr2[j])
            j++
        }
    }
    if (arr1[i]) {
        var remaining = arr1.slice(i);
        for (let i = 0; i < remaining.length; i++)
            result.push(remaining[i]);
    }
        if (arr2[j]) {
            var remaining = arr2.slice(j);
            for (let j = 0; j < remaining.length; j++)
                result.push(remaining[j]);
            }
            return result
    }

console.log(merging([1,2,4,6,7,9],[3,5,8,10]));

const mergeSort = (arr) => {
    var n = arr.length
    if(n <= 1) {
        return arr;
    }
    var midPos = Math.floor(arr.length/2)
    var left = arr.slice(0,midPos);
    var right =  arr.slice(midPos);
    return merging(mergeSort(left),mergeSort(right))
}

var arr = [5,8,3,9,7,2,1,4]

console.log(mergeSort(arr))

//=======Q3. Implement Quick Sort ========//
var partition = (arr,l,h) => {
    var pivot = arr[l]
    var i = l, j = h;
    do{
      do{i++}while(arr[i]<=pivot);
      do{j--}while(arr[j]>pivot);
      if(i<j)
        {
          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
    }while(i<j);
    var temp = arr[l];
    arr[l] = arr[j];
    arr[j] = temp;
    return j;
  }
  
  var quickSort = (arr,l,h) => {
    var j;
    if(l<h)
      {
        j = partition(arr,l,h);
        quickSort(arr,l,j);// left part
        quickSort(arr,j+1,h)
      }
    // return arr;
  }
  var arr = [2,3,5,4,6]
  quickSort(arr,0,arr.length)
  console.log('Sorted Array = ',arr)
  
//========= Q4.Implement Insertion Sort ========//
const insertionSort = (arr) => {
  const n = arr.length;
  for(let i=1;i<n;i++)
    {
      let key = arr[i];
      let j = i - 1;
      while(j>=0 && arr[j]>key)
        {
          arr[j+1] = arr[j];
          j = j - 1;
        }
      arr[j+1] = key;
    }
  console.log('Sorted Array = ', arr)
}

const arr1 = [5,7,6,9,4,8]
insertionSort(arr)

//======== Q5.Write a program to sort list of strings (similar to that of dictionary) ======//
var string = document.prompt("Please enter a string");
var stringArray=string.split(' ');
stringArray.sort();
console.log(string);
console.log(stringArray);
console.log(stringArray.join(' '));