import React, { useEffect, useRef, useState } from 'react'

const Review = (props) => {
     //const [pos,setpos]=useState(0);
     let pos=useRef(0);
        const [render,setrender]=useState(props.data[0]);
        const handlerandom=()=>{
           pos.current=Math.floor(Math.random()*4);
           setrender(props.data[pos.current]);
        }
const handlenext=()=>{
    if (pos.current<props.data.length-1) {
        //setpos(pos+1);
        pos.current++;
    }else{
        pos.current=0;
        //setpos(0);
    }
    console.log(pos);
  setrender(props.data[pos.current]);
  console.log(render);
  console.log(pos);
}
const handleprev=()=>{
    if (pos.current==0) {
        pos.current=props.data.length-1;
        //setpos(props.data.length-1);
    }else{
        pos.current--;
        //setpos(pos-1);
    }
    console.log(pos);
  setrender(props.data[pos.current]);
  console.log(pos);
  console.log(render);
}
  return (
    <div>
        <div className="review">
             {console.log(render,'in html')}
            <div className='author'>{render.name} </div>
            <div className='job'>{render.job} </div>
            <div className='info'>{render.text} </div>
            <div className='person-img'><img src={render.image} alt='image' /></div> 
    </div>
        <button onClick={handleprev} className='prev-btn'>previous</button>
        <button onClick={handlerandom} className='random-btn' >surprise me</button>
        <button onClick={handlenext} className='next-btn'>next</button>
    </div>
  )
}

export default Review