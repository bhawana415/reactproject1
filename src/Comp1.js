import React,{Component} from 'react';
import './Comp1.css';
import 'tachyons';
import Comp1list from './Comp1list.js';




class Comp1 extends Component{
    constructor(){
        super();
        this.state ={
            name:"welcome to IT development"
        }
    }
    namechange(){
        this.setState({
            name:"Suscribe to react js offical side"
        })
    }

   render() {
    const comp1listarray=[
        {
            id:1,
            name:"swati",
            work:"web developer"
        },
        {
            id:2,
            name:"monika",
            work:"software developer"
   
        },
        {
            id:3,
            name:"ritika",
            work:"tester"
        },
        {
            id:4,
            name:"nutan",
            work:"engineer"
        }
    ]
    const comp1atcard=comp1listarray.map((comp1card,i)=>{  //map callback function map(callback(currentvalue,index,array)arg)
                                                           //argument we can pass anything it hold the value of array
        return <Comp1list key={i} id ={comp1listarray[i].name}
                         name={comp1listarray[i].name}
                         work={comp1listarray[i].work}/>
       
        })
       
    return (
        <div className="mainpage">
        <h1>{this.state.name} </h1>
         {comp1atcard}
        <button onClick ={()=>this.namechange()}>suscribe</button>
       </div>
    )
  }    
   
}

export default Comp1;