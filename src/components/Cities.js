

import React, { useState } from "react";

const Cities=({suggestions})=>{
    let[cityArr,SetCity]=useState([]);
    function findCity(e){

        let val=e.target.value;
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
       onChange={findCity}/>
            <ul>
{  cityArr &&  cityArr.map((urban,index)=>
                    
            <li key={index}>{urban}</li>
                    )

 }
 </ul>
        </div>

    )
}

export default Cities;