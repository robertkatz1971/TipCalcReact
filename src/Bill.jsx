import { useState } from "react";
const Bill = ({total, onChange}) => {

    return (
        <div>
            <h3>How much was the bill?</h3>
            <input 
                type="number" 
                onChange={(e) => onChange(e.target.value)} 
                value={total} 
            />
        </div>
    )
}

export default Bill;