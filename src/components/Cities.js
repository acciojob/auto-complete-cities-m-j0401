

import React, { useEffect, useState } from "react";

const Cities=({suggestions})=>{
    let[cityArr,SetCity]=useState([]);
    let[ans,setAns]=useState("");
    //useEffect(()=>{},[])
    useEffect(()=>{
    
    },[setAns])

    function findCity(e){

        let val=e.target.value;
        setAns(val)
        if(val=="")
        {
            SetCity([])
            return;
        }
     let ans=suggestions.filter((ct,ind)=>
             ct.includes(val)
    )
    SetCity(ans);

     }

    return(
        <div>
       <input type="text" 
       placeholder="Enter the City name"
       onChange={findCity}
       value={ans}
    
       />
            <ul>
{  cityArr &&  cityArr.map((urban,index)=>
                    
            <li key={index} onClick={()=>setAns(urban)}>{urban}</li>
                    )

 }
 </ul>
        </div>

    )
}

export default Cities;