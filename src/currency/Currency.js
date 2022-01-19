import React from "react"
import {FetchCurrency} from "../data"
import './Currency.css';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useState} from "react";


const Currencies=()=>{
const [searchTerm, setSearchTerm]=useState("")
return(
    <div className="options">
    <div className="inputContainer">
        <div className="clear">
            <div>
        <h1>Select Currency</h1>
        </div>
        <div style={{cursor:"pointer"}}>



        <ClearIcon />
        </div>
        </div>
        <div className="serchContainer" >
        <div className="icon" style={{cursor:"pointer"}}><SearchIcon /></div>

<div>
<input className="input" type="search" placeholder="" onChange={event=>{setSearchTerm(event.target.value)}} />
</div>

\
</div>
<div className="mapCurrency">


    {
FetchCurrency.map(currency=>{
    if (searchTerm===""){
        return(
            <div className="currency">
                      <div className="currency">
            <div style={{flex:1}}>
<p style={{cursor:"pointer"}}>{currency.currency}</p>
</div>
<div className="chevron" style={{flex:1}}>
    <div>
<p style={{cursor:"pointer"}}>{currency.abbreviation}</p>
</div>
<div><ChevronRightIcon/></div>
</div>
</div>  
            </div>
        )
    }
    else if(currency.currency.toLowerCase().includes(searchTerm.toLowerCase())){
        return(
            <div>
            <div className="currency">
                <div style={{flex:1}}>
    <p>{currency.currency}</p>
    </div>
    <div className="chevron" style={{flex:1}}>
        <div>
    <p>{currency.abbreviation}</p>
    </div>
    <div><ChevronRightIcon/></div>
    </div>
    </div>
    
            </div>
        )
    }

})

    }
    </div>
    </div>
    </div>
    )


}
export default Currencies



