// Output HTML Element Variables
let tipAmount = document.getElementById('tipAmountOutput');
let totalOutput = document.getElementById('totalBillOutput');
let checkOutput = document.getElementById('paycheckAmountOutput');
let gradeOutput = document.getElementById('percentGradeOutput');
let gasOutput = document.getElementById('gasCostOutput')

let tipBtn = document.getElementById("tipButton");
tipBtn.addEventListener('click', function(){
    //Tip Calculator Variables
    let subTotal = document.getElementById('subTotalInput').valueAsNumber;
    let percentage = document.getElementById('percentageInput').valueAsNumber;
    let tipAmount;
    let totalBill;

    //Do The Math
    tipAmount = subTotal * percentage;
    totalBill = subTotal + tipAmount;

    //Only Show 2 Decimal Places
    tipAmount = tipAmount.toFixed(2);
    totalBill = subTotal.toFixed(2);

    //Show The Output
    tipAmount.innerHTML = "$" + tipAmount;
    totalOutput.innerHTML = "$" + totalBill;
})

let paycheckBtn = document.getElementById("paycheckButton");