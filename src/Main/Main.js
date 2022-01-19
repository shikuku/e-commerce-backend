import React, {useState} from "react";
import './Main.css';
import Currency from "../currency/Currency";


const Main=({closedialogue,setClosedialogue})=>{
    const [data , setData]=useState({
        invNo:"1",
        invDate:"",
        invTerm:"",
        invDateDue:"",
        invPO:"",
        invItem1:"Item",
        invQuantity:"Quantity",
        invRate:"Rate",
        invAmount:"Amount",
        invItem:"+ Line Item",
        invNum:"1",
        invDolar:"$ 0",
        invCash:"$ 0.00",
        invNotes:"Notes any relevant information not already covered",
        invNote:"Terms and condition - late fees,payment methods, delivery",
        invTax:"tax",
        invTaxper:"0%",
        invPaidno:"Amount Paid",
        invPaidDollar:"$ 0",
        invBalance:"Balance Due",
        invBalanceDollar:"$0.00",
        invBalanceDollarSend:"Send Invoice",
        invBalanceDollarSendIn:"My Invoice",
        invForm:"Who is this invoice from?(required)",
        invFrom:"Who is this invoice to ?(required)",
        invOption:"(optional)",
        invDateLabel:"Date",
        invTermLabel:"Payment Terms",
        invDateDueLabel:"Due Date",
        invPOLabel:"PO Number",
        invItemLbabel:"Description of product or service",
        invHead:"INVOICE"
    })
const showDialogue=()=>{
    setClosedialogue(!closedialogue)
}

const handleCloseDialogue=()=>{
    setClosedialogue(!closedialogue)
}

return(
    <div className="container-content">
    {console.log(data.invNo)}
    <div className="containerNav">
    <div className="container">
    <div className="logocontent">
<div className="logo">
    <div>
        <input  className="addlogo"type="" placeholder="Add Your Logo"/>
    </div>
    <div className="invoice">
        <input onChange={(e)=>setData({invHead:e.target.value})} className="invoicevalue" type="text" value={data.invHead}/>
       
    </div>
<div style={{width:200 , height:300 , }}> </div>

</div>

<div className="fillContainer">
<div>
<input onChange={(e)=>setData({invForm:e.target.value})} className="fillrequire" type="text" value={data.invForm}/>
<div className="bill">
<div>
    <div><p>Bill To</p></div>
    <div><input onChange={(e)=>setData({invFrom:e.target.value})} className="shipBill" type="text" value={data.invFrom}/></div>
</div>
<div>
    <div><p>Ship To</p></div>
    <div><input onChange={(e)=>setData({invOption:e.target.value})} className="shipBill" type="text" value={data.invOption}/></div>
</div>
</div>
</div>

<div className="details">
 <div className="invoicetext">
        <label>#</label>
        <input onChange={(e)=>setData({invNo:e.target.value})} type="text" value={data.invNo}/>
</div> 

<div>
    <label><input onChange={(e)=>setData({invDateLabel:e.target.value})} className="detailslabel" type="text" value={data.invDateLabel}/></label>
    <input onChange={(e)=>setData({invDate:e.target.value})} className="termsofpayment" type="text" value={data.invDate}/>
</div>

<div>
    <label><input onChange={(e)=>setData({invTermLabel:e.target.value})} className="detailslabel" type="text" value={data.invTermLabel}/></label>
    <input onChange={(e)=>setData({invTerm:e.target.value})} className="termsofpayment" type="text" value={data.invTerm}/>
</div>

<div>
    <label><input onChange={(e)=>setData({invDateDueLabel:e.target.value})} className="detailslabel" type="text" value={data.invDateDueLabel}/></label>
    <input onChange={(e)=>setData({invDateDue:e.target.value})} className="termsofpayment" type="text" value={data.invDateDue}/>
</div>

<div>
    <label><input onChange={(e)=>setData({invPOLabel:e.target.value})} className="detailslabel" type="text" value={data.invPOLabel}/></label>
    <input onChange={(e)=>setData({invPO:e.target.value})} className="termsofpayment" type="text" value={data.invPO}/>
</div>

</div>

</div>

<div className="rate">
    <div>

<input onChange={(e)=>setData({invItem1:e.target.value})} className="rateInput" type="text" value={data.invItem1} />
    </div>

    <div className="rateItems">
        <div className="rateQuantity">
        <div>
        <input onChange={(e)=>setData({invQuantity:e.target.value})} className="rateInput" type="text" value={data.invQuantity} />
        </div>
        <div>
        <input onChange={(e)=>setData({invRate:e.target.value})} className="rateInput" type="text" value={data.invRate}/>
        </div>
        </div>
        <div>
    <input onChange={(e)=>setData({invAmount:e.target.value})} className="rateInput" type="text" value={data.invAmount} />
            </div>
    </div>
</div>

<div className="itemDes">
<div>
    <div>
    <input onChange={(e)=>setData({invItemLbabel:e.target.value})} style={{marginRight:6 , marginBottom:12}} type="text"  value={data.invItemLbabel}/>
    </div>
    <div>
    <input onChange={(e)=>setData({invItem:e.target.value})} className="lineItem" type="text" value={data.invItem}/>
</div>
</div>
<div className="itemAmount">
    <div className="itemQuantity">
        <div>
    <input onChange={(e)=>setData({invNum:e.target.value})} className="outline" type="text" value={data.invNum}/>
    </div>
    <div>
        <input onChange={(e)=>setData({invDolar:e.target.value})} className="outline" type="text" value={data.invDolar}/>
    </div>

    </div>
    <div>
    <input onChange={(e)=>setData({invCash:e.target.value})} className="outline" type="text"  value={data.invCash}/>
    </div>
</div>

</div>


<div className="terms">
<div>
<p>Notes</p>
<input onChange={(e)=>setData({invNotes:e.target.value})}  className="termsInput" type="text" value={data.invNotes}/>
<p>Terms</p>
<input onChange={(e)=>setData({invNote:e.target.value})}   className="termsInput"  type="text" value={data.invNote}/>
    </div>




<div>
<div className="priceTotals">
    <div>
    <p>Subtotal</p>
    </div>
    <div>
    <p>$0.00</p>
    </div>
</div>
<div className="Tax">
<label><input onChange={(e)=>setData({invTax:e.target.value})} className="TaxInput" type="text" value={data.invTax}/></label>
<input onChange={(e)=>setData({invTaxper:e.target.value})} className="TaxPercentage" type="percentage" value={data.invTaxper}/>
</div>
<div className="Transportation">
    <div>
<p>+ Discount</p>
</div>
<div>
<p>+ Shipping</p>
</div>
</div>
<div className="dollars">
    <div>
<p>Total</p>
</div>
<div>
<p>$0.00</p>
</div>
</div>
<div>
<label> <input onChange={(e)=>setData({invPaidno:e.target.value})} className="dollarRate" type="text" value={data.invPaidno}/></label>
<input onChange={(e)=>setData({invPaidDollar:e.target.value})} className="dollarInput" type="text"  value={data.invPaidDollar}/>
</div>
<div>
<label><input onChange={(e)=>setData({invBalance:e.target.value})} className="dollarRate" type="text"  value={data.invBalance}/></label>
<input onChange={(e)=>setData({invBalanceDollar:e.target.value})} className="dollarInput" type="text" value={data.invBalanceDollar}/>
</div>
</div>
</div>
    </div>

<div className="download">
    <input onChange={(e)=>setData({invBalanceDollarSend:e.target.value})} className="inputInvoice" type="text" value={data.invBalanceDollarSend}/>
<h2>DOWNLOAD INVOICE</h2>
<p onClick={showDialogue} style={{cursor:"pointer"}}>Currency <a href="#" className="downloadspan">USD</a></p>
<p style={{color:"teal"}}>Send Tamplate</p>
<input onChange={(e)=>setData({invBalanceDollarSendIn:e.target.value})} className="send"  type="text" value={data.invBalanceDollarSendIn}/>

</div>
</div>
</div>

<div className="currency-update">
{closedialogue&&<Currency handleCloseDialogue={handleCloseDialogue}/>}
</div>

    </div>
)

}
export default Main