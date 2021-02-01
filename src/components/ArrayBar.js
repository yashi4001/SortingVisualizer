import react,{useState} from "react"
import "./ArrayBar.css"
import {mergeSortAlgo,bubbleSortAlgo, quickSortAlgo,selectSortAlgo,insertionSortAlgo} from "./sortingAlgo"
function ArrayBar(){
    const[arrayBars,setArr]=useState([]);
    const [sortButton,changeSelect]=useState("false");

    function generate(){
        let arr=[];
        var i;
        var max=340;
        var min=50;

        for(i=0;i<50;i++){
            arr.push(Math.floor(Math.random()*(max-min+1)+min));
        }
        if(arrayBars.length===0)
        setArr(arr);
    }

    function buttonSelect(event){
        const id=event.target.id;
        if(sortButton==="false"){
        changeSelect("true");
        document.getElementById(`${id}`).style.backgroundImage="linear-gradient(#65d6ce,#65d6ce)";
        document.getElementById(`${id}`).style.color="black";
        document.getElementById(`${id}`).style.fontWeight="bold";

        const functionName=`${id}Sort`;
        console.log(functionName);
       switch(functionName){
           case "mergeSort":
               mergeSort(arrayBars);
               break;
            case "bubbleSort":
                bubbleSort(arrayBars);
                break;
            case "quickSort":
                quickSort(arrayBars);
                break;
            case "selectionSort":
                selectionSort(arrayBars);
                break;
            case "insertionSort":
                insertionSort(arrayBars);
                break;
       }
        }
        else{
            changeSelect("false");
            document.getElementById(`${id}`).style.backgroundImage="linear-gradient(#434343,#000000)";
            document.getElementById(`${id}`).style.color="white";
            document.getElementById(`${id}`).style.fontWeight="normal";
        }
        
    }

    function mergeSort(arr){
        let tempArr=[...arr];
        let animations=mergeSortAlgo(tempArr);
        console.log(animations)
        for(var i=0;i<animations.length;i++){
            let changeColor;
            if(i%3!==2)
            changeColor=true;
            else
            changeColor=false;
            if(changeColor){
                let [bar1,bar2]=animations[i];
                const color= i%3===0?"blue":"rgb(112, 25, 61)";
                console.log(color);
                setTimeout(()=>{
                    document.getElementById(`${bar1}`).style.backgroundColor=color;
                    document.getElementById(`${bar2}`).style.backgroundColor=color;
                },(10*i));
            }
            else{
                const[changeIndex,newHeight]=animations[i];
                setTimeout(()=>{
                    document.getElementById(`${changeIndex}`).style.height=`${newHeight}px`;
                },(10*i));
            }
        }
        //setArr(tempArr);
    }

    function bubbleSort(arr){
        let animations;
        let tempArr=[...arr];
        animations=bubbleSortAlgo(tempArr);
        console.log(tempArr);
        let flag=0;
        for(var i=0;i<animations.length;i++){
            let colorChange;
            if(i%4!==2&&i%4!==3)
            colorChange=true;
            else
            colorChange=false;
            if(colorChange){
                let color;
                if(i%4===0)
                color="blue";
                else
                color="rgb(112, 25, 61)";
                let [bar1,bar2]=animations[i];
                setTimeout(()=>{
                    document.getElementById(`${bar1}`).style.backgroundColor=color;
                    document.getElementById(`${bar2}`).style.backgroundColor=color;
                },(10*i));

            }
            else{
                if(animations[i].length>1){
                    let[bar,newHeight]=animations[i];
                    setTimeout(()=>{
                        document.getElementById(`${bar}`).style.height=`${newHeight}px`;
                    },(10*i));

                }
            }
        }

    }

    function quickSort(arr){
        let temp=[...arr];
        let animations=quickSortAlgo(temp);
        //console.log(animations);
        for(var i=1;i<animations.length;i++){
            let pivotIndex=animations[i].pivot;
            if(i>1){
                let previousPivot=animations[i-1].pivot;
                setTimeout(() => {
                        document.getElementById(`${previousPivot}`).style.backgroundColor="rgb(112, 25, 61)";
                    }, (500*i));
            }
            setTimeout(() => {
                document.getElementById(`${pivotIndex}`).style.backgroundColor="red";
            }, (500*i));
            console.log(animations[i].positions.length);
            for(var t=0;t<animations[i].positions.length;t++){
                const color=t%2===0?"yellow":"rgb(112, 25, 61)";
                const [start,end]=animations[i].positions[t];
                setTimeout(() => {
                    document.getElementById(`${start}`).style.backgroundColor=color;
                    document.getElementById(`${end}`).style.backgroundColor=color;
                }, 1000*t);
            }
            for(var t=0;t<animations[i].swapPositions.length-1;t=t+2){
                const [barIndex,height]=animations[i].swapPositions[t];
                setTimeout(() => {
                    document.getElementById(`${barIndex}`).style.height=`${height}px`;
                }, 2000*t);
            }

            for(var t=0;t<animations[i].finalSwapPositions.length;t++){
                const [barIndex,height]=animations[i].finalSwapPositions[t];
                setTimeout(() => {
                    document.getElementById(`${barIndex}`).style.height=`${height}px`;
                }, 3000*t);
            }
        }

        
    }

    function selectionSort(arr){
        let tempArr=[...arr];
        let animations=selectSortAlgo(tempArr);
        console.log(animations);
        for(var i=0;i<animations.length;i++){
            let[bar1,bar2]=animations[i];
            let color;
            let colorChange;
            if(i%2===0&&bar1===bar2){
                colorChange=true;
                color="yellow";
            }
            else if(i%2!==0&&bar1===bar2){
                colorChange=true;
                color="rgb(112, 25, 61)";
            }
            else if((i%2===0&&bar2<50)&&bar1!==bar2){
                colorChange=true;
                color="blue";
            }
            else if((i%2!==0&&bar2<50)&&bar1!==bar2){
                colorChange=true;
                color="rgb(112, 25, 61)";
            }
            else{
                colorChange=false;
            }
            if(colorChange){
                setTimeout(() => {
                    document.getElementById(`${bar1}`).style.backgroundColor=color;
                    document.getElementById(`${bar2}`).style.backgroundColor=color;
                }, 10*i);
            }
            else{
                setTimeout(() => {
                    document.getElementById(`${bar1}`).style.height=`${bar2}px`;
                }, 10*i);
            }
        }
    }

    function insertionSort(arr){
        let temp=[...arr];
        let animations=insertionSortAlgo(temp);
        for(var i=0;i<animations.length;i++){
            let isColorChange;
            let [bar1,bar2]=animations[i];
            if(bar2<50)
            isColorChange=true;
            else
            isColorChange=false;
            if(isColorChange){
                let color=i%2===0?"yellow":"rgb(112,25,61)";
                    setTimeout(() => {
                        document.getElementById(`${bar1}`).style.backgroundColor=color;
                        document.getElementById(`${bar2}`).style.backgroundColor=color;
                    }, 10*i);
            }
            else{
                setTimeout(() => {
                    document.getElementById(`${bar1}`).style.height=`${bar2}px`;
                    document.getElementById(`${bar1}`).style.backgroundColor="red";
                }, 10*i);
            }
        }
    }

    generate();


    return(
        
        <body>
        <nav className="nav">
                SORT VISUALIZER
                <div className="navContent">
                    Array Size
                    Speed
                </div>
        </nav>
        <br></br>
        <br></br>
        <div className="bar">
           {arrayBars.map((h,key)=>(
               <div className="array" id={key} style={{ height:`${h}px`}}></div>
           ))}
        </div>
        <br></br>
        <br></br>
        <button className="buttonStyle merge" id="merge" onClick={buttonSelect}>Merge Sort</button>
        <button className="buttonStyle heap" id="selection" onClick={buttonSelect}>Selection Sort</button>
        <button className="buttonStyle bubble" id="bubble" onClick={buttonSelect}>Bubble Sort</button>
        <button className="buttonStyle quick" id="quick" onClick={buttonSelect}>Quick Sort</button>
        <button className="buttonStyle " id="insertion" onClick={buttonSelect}>Insertion Sort</button>
        </body>
        
    );
}

export default ArrayBar;