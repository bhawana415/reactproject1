import React from 'react';
const Comp1list =(props) =>{
return(
<div className ="queenstyle ma4 bg-light-purple dib pa3 grow tc shadow-4">
<img src= {`https://joeschmoe.io/api/v1/${props.name}`} alt="Comp1" />
<h1>{props.name} </h1>
<p>{props.work}</p>
</div>
)
}
export default Comp1list;