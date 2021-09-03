
## C++ merge sort implementation
```
#include<bits/stdc++.h>
using namespace std;

void merge(int arr[], int low, int mid, int high){
    int size1 = mid-low+1; 
    int size2 = high-mid;
    auto arr1 = new int[size1];
    auto arr2 = new int[size2];
    for(auto i = 0; i < size1; i++) {
        arr1[i] = arr[low + i];
    }
    for(auto i = 0; i<size2; i++) {
        arr2[i] = arr[mid+1+i];
    }
    int i = 0;
    int j = 0;
    int k = low;
    while(i < size1 && j < size2) {
        if(arr1[i] <= arr2[j]){
            arr[k] = arr1[i];
            i++;
        } else {
            arr[k] = arr2[j];
            j++;
        }
        k++;
    }
    while(i < size1) {
        arr[k] = arr1[i];
        i++;
        k++;
    }
    while(j < size2) {
        arr[k] = arr2[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int low, int high) {
    if(low>=high) {
        return;
    }
    int mid = (low+high)/2;
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    merge(arr, low, mid, high);
}

void printArray(int arr[], int size) {
    for(int i =0; i< size; i++) {
        cout<<arr[i]<<" ";
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 7, 6};
    auto arr_size = sizeof(arr)/sizeof(arr[0]);

    cout<<"Give array is \n";
    printArray(arr, arr_size);

    mergeSort(arr, 0, arr_size-1);

    cout<<"\n Sorted array is \n";
    printArray(arr, arr_size);
    return 0;
}
```

```
<html>
    <body>
    <script>
    Javascript mergesort Implementation

    mSort = (array) => {
        if(array.length == 1){
            return array
        }
        const mid = Math.floor(array.length/2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);
        document.write(middle)
        return merge(
            mSort(left),
            mSort(right)
        )
    }

    merge = (left, right) => {
        let result = [];
        let i = 0;
        let j = 0;
        while(i < left.length && j < right.length) {
            if(left[i] < right[j]) {
                result.push(left[i])
                i++;
                document.write("</br>");
            } else {
                result.push(right[j])
                j++;
            }
        }
        return concat(left.slice(i)).concat(j)
    }

    const list = [4, 7, 5, 9, 1, 3, 8, 2]
    document.write(mSort(list));
    </script>
    </body>
</html>
```
