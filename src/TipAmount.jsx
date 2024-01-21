import { useState } from "react";

const TipAmount = ({question, tipPercent, onChange}) => {

    return (
        <div>
            <h3>{question}</h3>
            
            <select 
                onChange={(e) => onChange(e.target.value)} 
                value={tipPercent | "0"}
            >
                <option value="0" >Dissatisfied (0%)</option>
                <option value="10">OK (10%)</option>
                <option value="15">Good (15%)</option>
                <option value="20">Excellent (20%)</option>
            </select>
        </div>
    )

}

export default TipAmount;