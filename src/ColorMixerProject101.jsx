import { useState } from "react";

function ColorMixer(){
    const colors=JSON.parse(localStorage.getItem('color'))
    const[r,setR]=useState(colors && colors.r?colors.r:0);
    const[g,setG]=useState(colors && colors.g?colors.g:0);
    const[b,setB]=useState(colors && colors.b?colors.b:0);
    const save=()=>{
        localStorage.setItem("color",JSON.stringify({r,g,b}))
        console.log("save");
        

    }
    return(
        <div>
            <h1>Color Mixer</h1>
        <div style={{backgroundColor:'rgb('+r+','+g+','+b+')',height:400,width:400}}>
            
            </div>
            
            <label htmlFor="">Red</label>
            <input type="range" value={r} onChange={(event)=>setR(event.target.value)} min={0} max={255} />
            <br /><br />
            <label htmlFor="">Green</label>
            <input type="range"value={g} onChange={(event)=>setG(event.target.value)}  min={0} max={255} />
            <br /><br />
            <label htmlFor="">Blue</label>
            <input type="range"value={b} onChange={(event)=>setB(event.target.value)}  min={0} max={255} />
            <br /><br />
            <button onClick={save} >Save</button>
        </div>
    )
}
export default ColorMixer;