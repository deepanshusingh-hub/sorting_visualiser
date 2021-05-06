var graph=document.querySelector('.graph');
var newArr=document.querySelector('.newArr');
var bubbleSrt=document.querySelector('.BubbleSort');
var selectionSrt=document.querySelector('.Selectionsort');
var quickSrt=document.querySelector('.QuickSort');
var arr=[];

newArr.addEventListener('click',()=>{
    clearSpace();
    clearArray();
    createRandomArray();    
    createGraph();

});
bubbleSrt.addEventListener('click',bubbleSort);
selectionSrt.addEventListener('click',selectionSort);
quickSrt.addEventListener('click',()=>{
    console.log("here");
    quickSort(0,99);
});
function clearArray()
{
    arr=[];
}
function createRandomArray()
{
    for(var i=0;i<100;i++)
    {
        var x=Math.floor(Math.random()*100)+1;
        arr.push(x);
    }
}
function createGraph()  // to create a graph of different heights based on elements of array
{
    for(var i=0;i<100;i++)
    {   
        var bar=document.createElement("div"); //add a div tag
        bar.classList.add("bar"); // add a class to a tag
        bar.setAttribute('id',"bar"+i); //add an id to a tag
        graph.appendChild(bar); //append the tag to parent tag
        document.getElementById("bar"+i).style.height=arr[i]+"%"; //add property heoght using js
    }
}
function clearSpace()  //to clear the initial graph created
{
    for(var i=0;i<100;i++)
    {   //console.log(document.getElementById("bar"+i));
        var myObj=document.getElementById("bar"+i);
        if(myObj!=null)myObj.remove();
    }
}

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 100);
    });
  }
  
async function swap(el1,el2)  //functio to swap two bars in html
{
    const result = await resolveAfter2Seconds();
    var style1=window.getComputedStyle(el1);
    var style2=window.getComputedStyle(el2);

    var transform1=style1.getPropertyValue("height");
    var transform2=style2.getPropertyValue("height");
    //await new Promise(resolve => setTimeout(() => {resolve(), delay(2)}));
    
    el1.style.height=transform2;
    el2.style.height=transform1;
}

async function bubbleSort()
{   
    for(var i=0;i<99;i++)
    {
        for(var j=0;j<100-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {   
                
                var element1=document.getElementById("bar"+j);
                element1.style.backgroundColor="red";
                var element2=document.getElementById("bar"+(j+1));
                element2.style.backgroundColor="red";
                element2.style.backgroundColor="red";
                const result = await resolveAfter2Seconds();
                if(element2!=null && element1!=null)swap(element1,element2);
                element1.style.backgroundColor="yellow";
                element2.style.backgroundColor="yellow";
                var x=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=x;
            }
            
        }
        element1.style.backgroundColor="green";
        const result = await resolveAfter2Seconds();
        element1.style.backgroundColor="yellow";
    }
}

async function selectionSort()
{
    for(var i=0;i<99;i++)
    {
        var min_index=i;
        for(var j=i+1;j<100;j++)
        {
            if(arr[j]<arr[min_index])min_index=j;
        }
        var element1=document.getElementById("bar"+min_index);
        element1.style.backgroundColor="red";
        var element2=document.getElementById("bar"+i);                
        element2.style.backgroundColor="red";
        const result = await resolveAfter2Seconds();
        if(element2!=null && element1!=null)swap(element1,element2);
        element1.style.backgroundColor="yellow";
        element2.style.backgroundColor="yellow";
        var x=arr[min_index];
        arr[min_index]=arr[i];
        arr[i]=x;
        element1.style.backgroundColor="green";
        const result2 = await resolveAfter2Seconds();
        element1.style.backgroundColor="yellow";
    }
}
// async function partition(arr,low,high)
// {   //console.log("partition");
//     var pivot=arr[high];
//     var i=(low-1);
//     for(var j=low;j<=high-1;j++)
//     {
//         if(arr[j]<pivot)
//         {
//             i++;
//             var element1=document.getElementById("bar"+i);
//             element1.style.backgroundColor="red";
//             var element2=document.getElementById("bar"+j);                
//             element2.style.backgroundColor="red";
//             const result = await resolveAfter2Seconds();
//             if(element2!=null && element1!=null)swap(element1,element2);
//             element1.style.backgroundColor="yellow";
//             element2.style.backgroundColor="yellow";
//             var x=arr[i];
//             arr[i]=arr[j];
//             arr[j]=x;
//             element1.style.backgroundColor="green";
//             const result2 = await resolveAfter2Seconds();
//             element1.style.backgroundColor="yellow";
//         }
        
//     }
//     var ell1=document.getElementById("bar"+(i+1));
//         var ell2=document.getElementById("bar"+high);
//         ell1.style.backgroundColor="red";
//         ell2.style.backgroundColor="red";
//         const result = await resolveAfter2Seconds();
//         if(ell2!=null && ell1!=null)swap(ell1,ell2);
//         ell1.style.backgroundColor="yellow";
//         ell2.style.backgroundColor="yellow";
//         var x=arr[i+1];
//         arr[i+1]=arr[high];
//         arr[high]=x;

//     return i+1;
// }

async function quickSort(low,high)
{   
    if(low<high)
    {   var pivot=arr[high];
        var i=(low-1);
        for(var j=low;j<=high-1;j++)
        {
            if(arr[j]<pivot)
            {
                i++;
                var element1=document.getElementById("bar"+i);
                element1.style.backgroundColor="red";
                var element2=document.getElementById("bar"+j);                
                element2.style.backgroundColor="red";
                const result = await resolveAfter2Seconds();
                if(element2!=null && element1!=null)swap(element1,element2);
                element1.style.backgroundColor="yellow";
                element2.style.backgroundColor="yellow";
                var x=arr[i];
                arr[i]=arr[j];
                arr[j]=x;
                element1.style.backgroundColor="green";
                const result2 = await resolveAfter2Seconds();
                element1.style.backgroundColor="yellow";
            }
            
        }
        var ell1=document.getElementById("bar"+(i+1));
            var ell2=document.getElementById("bar"+high);
            ell1.style.backgroundColor="red";
            ell2.style.backgroundColor="red";
            const result = await resolveAfter2Seconds();
            if(ell2!=null && ell1!=null)swap(ell1,ell2);
            ell1.style.backgroundColor="yellow";
            ell2.style.backgroundColor="yellow";
            var x=arr[i+1];
            arr[i+1]=arr[high];
            arr[high]=x;
        var pi=i+1;
        quickSort(low,pi-1);
        quickSort(pi+1,high);
    }
}