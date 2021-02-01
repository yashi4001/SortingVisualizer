 function mergeSortAlgo(arr){
    let animations=[];
    if(arr.length<1)
    return arr;
    else{
        doMerge(arr,0,49,animations);
    }
    return animations;
   
}
function doMerge(arr,beg,end,animations){
    if(beg<end){
        let mid=Math.floor((end+beg)/2);
        doMerge(arr,beg,mid,animations);
        doMerge(arr,mid+1,end,animations);
        merge(arr,beg,mid,end,animations);
    }
}
function merge(arr,beg,mid,end,animations){
    let temp=[];
    let i=beg;
    let j=mid+1;
    let k=beg;
    while(i<=mid&&j<=end){
        animations.push([i,j]);
        animations.push([i,j]);
        if(arr[i]<=arr[j]){
            animations.push([k,arr[i]]);
            temp[k]=arr[i];
            i++;
        }
        else{
            animations.push([k,arr[j]]);
            temp[k]=arr[j];
            j++;
        }
        k++;
    }
    if(i>mid){
        while(j<=end){
            animations.push([j,j]);
            animations.push([j,j]);
            animations.push([k,arr[j]]);
            temp[k]=arr[j];
            j++;
            k++;
        }
    }
    else{
        while(i<=mid){
            animations.push([i,i]);
            animations.push([i,i]);
            animations.push([k,arr[i]]);
            temp[k]=arr[i];
            i++;
            k++;
        }
    }
   for(var t=beg;t<=end;t++){
       arr[t]=temp[t];
   }
}

 function bubbleSortAlgo(arr){
    let animations=[];
    if(arr.length<=1)
    return arr;
    else{
        doBubbleSort(arr,animations);
    }
    return animations;
}

function doBubbleSort(arr,animations){
    let n=arr.length;
    var i,j,t;
    for(i=0;i<n-1;i++){
        for(j=0;j<n-i-1;j++){
            animations.push([j,j+1]);
            animations.push([j,j+1]);
            if(arr[j]>arr[j+1]){
                animations.push([j,arr[j+1]]);
                animations.push([j+1,arr[j]]);
                t=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=t;
            }
            else{
                animations.push(0);
                animations.push(0);
            }
        }
    }
}

function quickSortAlgo(arr){
    let animations=[{}];
    if(arr.length===1)
    return arr;
    else{
        doQuickSort(arr,0,arr.length-1,animations);
    }
    return animations;
}

function doQuickSort(arr,lb,ub,animations){
    if(lb<ub){
        let loc=partition(arr,lb,ub,animations);
        doQuickSort(arr,lb,loc-1,animations);
        doQuickSort(arr,loc+1,ub,animations);
    }
}

function partition(arr,lb,ub,animations){
    let key=arr[lb];
    let start=lb;
    let end=ub;
    let animationObject={
        pivot:lb,
        positions:[],
        swapPositions:[],
        finalSwapPositions:[]
    }
    // animations.push([lb,-1]);
    // animations.push([lb,-2]);
    while(start<end){
        // animations.push([arr[start]]);
        // animations.push([arr[start]]);
        // animations.push([arr[end]]);
        // animations.push([arr[end]]);
        animationObject.positions.push([start,end]);
        animationObject.positions.push([start,end]);
        while((start+1)<arr.length&&arr[start]<=key){
            start++;
        }
        while((end>0)&&arr[end]>key){            
            end--;
        }
        if(start>end){
            // animations.push([lb,arr[end]]);
            // animations.push([end,arr[lb]]);
            animationObject.finalSwapPositions.push([lb,arr[end]]);
            animationObject.finalSwapPositions.push([end,arr[lb]]);
            break;
        }
        else{
            // animations.push([start,arr[end]]);
            // animations.push([end,arr[start]]);
            animationObject.swapPositions.push([start,arr[end]]);
            animationObject.swapPositions.push([end,arr[start]]);
            [arr[start],arr[end]]=[arr[end],arr[start]];
        }
    }
    //animations.push([-1,-1]);
    animations.push(animationObject);
    [arr[lb],arr[end]]=[arr[end],arr[lb]];
    return end;
}


function selectSortAlgo(arr){
    let animations=[];
    if(arr.length<1)
    return arr;
    var i,j;
    for(i=0;i<arr.length-1;i++){
        let minIndex=i;
        for(j=i+1;j<arr.length;j++){
            animations.push([minIndex,j]);
            animations.push([minIndex,j]);
            if(arr[minIndex]>arr[j]){
                animations.push([j,j]);
                animations.push([j,j]);
                minIndex=j;
            }
        }
        animations.push([i,arr[minIndex]]);
        animations.push([minIndex,arr[i]]);
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];
    }
    return animations;
}

function insertionSortAlgo(arr){
    let animations=[];
    var i,j;
    for(i=1;i<arr.length;i++){
        let temp=arr[i];
        j=i-1;
        animations.push([i,j]);
        animations.push([i,j]);
        while(j>=0&&temp<arr[j]){
            animations.push([j+1,j]);
            animations.push([j+1,j]);
            animations.push([j+1,arr[j]]);
            animations.push([j+1,arr[j]]);
            arr[j+1]=arr[j];
            j--;
        }
        animations.push([j+1,i]);
        animations.push([j+1,i]);
        animations.push([j+1,temp]);
        animations.push([j+1,temp]);
        arr[j+1]=temp;
    }
    console.log(arr);
    return animations;
}

export {mergeSortAlgo,bubbleSortAlgo,quickSortAlgo,selectSortAlgo,insertionSortAlgo};

