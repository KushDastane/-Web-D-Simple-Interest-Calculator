function compute() {
    var principal = parseFloat(document.getElementById("principal").value);//just retrieves
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);

    if (isNaN(principal) || principal <= 0) {
        alert("Please enter a valid positive principal amount");
        document.getElementById("principal").focus();
        return;
    }

    if(isNaN(years) || years<=0){
        alert("Please select a valid number of years");
        document.getElementById("years").focus(); //focus shows blinking and all for specific  field
        return;
    }

    var interest = principal * years * rate / 100;
    var amount = parseFloat(principal) + parseFloat(interest);
    var year = new Date().getFullYear() + parseInt(years); //gets current year and adds years to get future year

    result.innerHTML = "If you deposit ₹" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "</mark>" + ",\<br\> You will receive an amount of ₹" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br>";    
}   

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}