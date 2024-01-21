const TotalTip = ({total, tipPercentages}) => {

    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const myFunction = (total, value) => {
        return total + value;   
    }

    let tipPct = ((tipPercentages.reduce((myFunction)) / tipPercentages.length) / 100);
    let tip = (total * tipPct)
    let totalBill = (tip + total);

    const message = `Bill is ${formatter.format(total)} - Tip: ${(tipPct * 100)}% - Total Bill = ${formatter.format(totalBill)}`

    return (
        <div>
            {message}
        </div>
    )
}

export default TotalTip;
