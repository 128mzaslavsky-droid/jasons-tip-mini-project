// Output HTML Element Variables
let tipAmount = document.getElementById('tipAmountOutput');
let totalOutput = document.getElementById('totalBillOutput');
let checkOutput = document.getElementById('paycheckAmountOutput');
let gradeOutput = document.getElementById('percentGradeOutput');
let gasOutput = document.getElementById('gasCostOutput')

let dieBtn = document.getElementById("dieButton");
dieBtn.addEventListener('click', function () {




    // Gas Cost Calculator Variables
    let numberRolled;




    // Do the math
    numberRolled = Math.floor(Math.random() * 6 + 1);




    // Only show 2 decimal places
    numberRolled = Math.floor(numberRolled)




    // Show the output
    diceOutput.innerHTML = numberRolled;




})






