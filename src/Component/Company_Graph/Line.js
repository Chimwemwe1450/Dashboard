import React,{useEffect} from 'react'
import Chart from 'chart.js';
import NewData from "./data/CompanyData.json"
var graph;
// creating of the chart from chart.js libary

const Ford=  Object.values(NewData.Ford)
const Citron =  Object.values(NewData.Citrion)


const Labels = Object.keys(NewData.Ford) 
// global varible


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
  Labels[9],
    ];
 
    
const  Loading = ()=>{


let  arr = labels1
let Array_Of_Values =  arr.map( function(Order =[],obeject={}){

 if(obeject < 9){

return Order
  }else if ( obeject > 9) {

return new Error (alert("please enter less than 8 "))
   } 
   return Order
} )

// another way but its more dynamic 
  

  const data = {
    labels: Array_Of_Values ,
    datasets: [{
      label: 'Ford',
      backgroundColor: 'purple',
      borderColor: 'rgb(255, 99, 132)',
     
      data:Ford,
    },]

  };

 
  const config = {
    type: 'line',
    data: data,
    options: {}
  };
 
  if (graph === undefined || graph === null) {
    graph = new Chart(document.getElementById('myChart11'),config  );
  } else {
    graph.destroy();
    graph = new Chart(document.getElementById('myChart11'),config  );
  }
}

 // loading the graph for the data
function Line() {
  useEffect(() => {
    Loading();
   
    });

 
//add new data set
  function dataset() {
      const newdatasets ={
        label:"Citron " ,
        data: Citron,
        backgroundColor: 'blue',
        borderColor: 'rgb(255, 99, 132)',
  
      };
      graph.data.datasets.push(newdatasets);
      graph.update();

    }
// reset  data for the chart
    function reset(){
      const datasets = {
        label:"Ford " ,
        data: Ford,
        backgroundColor: 'purple',
        borderColor: 'rgb(255, 99, 132)',
      }

      graph.data.datasets.push(datasets);
      graph.update();
    }


      
 //delete the data  set of a single data set 
function Delete(){
graph.data.datasets.pop();
graph.update();

}

  return (
    <div>
   <canvas id="myChart11" />

<button onClick={dataset}>Update chart </button>
<button onClick={reset} > Reset</button>
<button onClick={Delete}>Delete  data set </button>


      </div>
  )
}

export default Line;