import React,{useState} from "react";

function Payment(){
    const [payment,SetPayment]=useState("");

    function handlePayment(event){
        SetPayment(event.target.value); 
    }
    return(
        <div>
            <h5>Select your Preferable payment type:{payment}</h5>
            <select value={payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="upi">UPI</option>
                <option value="phonepe">PhonePe</option>
                <option value="googlepay">Google Pay</option>
                <option value="Cash">Cash</option>
            </select>
            <hr />
        </div>

    );
}
export default Payment;