import React,{useEffect, useState} from 'react'
import Chart from 'chart.js';
import Data from './data/Database.json'
import NewData from "./data/CompanyData.json"
var graph;
// creating of the chart from chart.js libary
const Toyota=  Object.values(NewData.Toyota)
const Ford=  Object.values(NewData.Ford)




const Labels = Object.keys(NewData.Toyota) 
// global varible


// create a  rendering method 



//static label   

// dynamic with json data 
const labels1 = [
  Labels[0],
  Labels[1],
  Labels[2],
  Labels[3],
  Labels[4],
  Labels[5],
  Labels[6],
  Labels[7],
  Labels[8],
  Labels[9]
    ];
 
    console.log(labels1)



const  Loading = ()=>{
  
let  arr = labels1
let Array_Of_Values =  arr.map( function(Order =[],obeject={}){

 if(obeject < 10){

return Order
  }else if ( obeject > 10) {

return new Error (alert("please enter less than 8 "))
   } 
   return Order
} )

// another way but its more dynamic 
  

  const data = {
    labels: Array_Of_Values ,
    datasets: [{
      label: 'Toyota',
      backgroundColor:
        'SlateBlue'
    
      ,
      borderColor: 'rgb(255, 99, 132)',
     
      data:Toyota,
    },]

  };

 
  const config = {
    type: 'bar',
    data: data,
    options: {}
  };
 
  if (graph === undefined || graph === null) {
    graph = new Chart(document.getElementById('myChart222'),config  );
  } else {
    graph.destroy();
    graph = new Chart(document.getElementById('myChart222'),config  );
  }
}

 // loading the graph for the data
function Bar_2(x) {
  useEffect(() => {
    Loading();
   
    });
  
    

 
//add new data set
  function dataset() {
      const newdatasets ={
        label:"Ford " ,
        data: Ford,
        backgroundColor: 'blue',
        borderColor: 'rgb(255, 99, 132)',
  
      };
      graph.data.datasets.push(newdatasets);
      graph.update();

    }
// reset  data for the chart
    function reset(){
      const newdatasets ={
        label:"Toyota " ,
        data: Toyota,
        backgroundColor: ' SlateBlue', };


      graph.data.datasets.push(newdatasets);
      graph.update();
    }


      
 //delete the data  set of a single data set 
function Delete(){
graph.data.datasets.pop();
graph.update();

}

  return (
    <div>
   <canvas id="myChart222"  />

<button onClick={dataset}>Update chart </button>
<button onClick={reset} >Reset</button>
<button onClick={Delete}>Delete  data set </button>

{x.Title}

      </div>
  )
}

export default Bar_2;