function convertCurrency() {
    var amount = /^[0-9]+$/;
    var IndianAmount = document.getElementById("indianAmount").value;
    
    if (IndianAmount == "")
     {
        document.getElementById("msg").innerText = "enter amount in INR.";
        return false; 
    }

    if (!IndianAmount.match(amount)) 
    {
        document.getElementById("msg").innerText = "Please enter a valid amount (only digits).";
        return false; 
    }

    var indianAmount = parseFloat(IndianAmount);
    if (!isNaN(indianAmount)) {
        const Dollar = 82.97;
        var convertedAmount = indianAmount / Dollar;
        document.getElementById("result").innerText = "converted Dollar amount is: " + convertedAmount.toFixed(3);
    } else {
        document.getElementById("result").innerText = "Invalid input";
    }

    return false; 
}
//dollar to indian rupee converter
function dollarCurrency() {
    var a = /^[0-9]+$/;
    var DollarAmount = document.getElementById("dollarAmount").value;

    if (DollarAmount === "") {
        document.getElementById("msg1").innerText = "Enter amount in dollars.";
        return false;
    }

    if (!DollarAmount.match(a)) {
        document.getElementById("msg1").innerText = "Please enter a valid amount (digits only).";
        return false;
    }

    var dollarAmount = parseFloat(DollarAmount);
    
    if (!isNaN(dollarAmount)) {
        const INR = 0.012;
        var convert = dollarAmount / INR;
        document.getElementById("result-1").innerText = "Converted Indian amount is: " + convert.toFixed(3);
        
    } else {
        document.getElementById("result-1").innerText = "Invalid input";
    }
    return false
}
//age teller
function ageConvert()
{
    var Age =/^[0-9]+$/
    var present = document.getElementById("presentYear").value
    var born = document.getElementById("bornYear").value
    if(present=="")
    {
        document.getElementById("msg2").innerText="enter the present year."
        return false
    }
    if(!present.match(Age))
    {
        document.getElementById("msg2").innerText="please enter the age in digits only."
        return false
    }
    if(born=="")
    {
        document.getElementById("msg3").innerText="enter your Born year."
        return false
    }
    if(!born.match(Age))
    {
        document.getElementById("msg3").innerText="please enter the age in digits only."
        return false
    }
     var present = parseInt(present)
     var born    = parseInt(born)
     
     if (presentYear >= bornYear) 
     {
        var age = present - born;
        document.getElementById("result-2").innerText = "Your current AGE is: " + age;
        
     }
     else
     {
        document.getElementById("result-2").innerText = "please enter the valid input"

     }

    return false
}
//simple interset calculator
function simpleInterest() {
    var principleAmount = document.getElementById("principle").value;
    var Time = document.getElementById("time").value;
    var RateOfInterest = document.getElementById("rateOfInterest").value;
    var numberPattern = /^[0-9]+$/;

    // Input validation
    if (principleAmount === "") {
        document.getElementById("msg4").innerText = "Please enter the principal amount.";
        return false;
    }
    if (!principleAmount.match(numberPattern)) {
        document.getElementById("msg4").innerText = "Please enter the principal amount in digits only.";
        return false;
    }
    if (Time === "") {
        document.getElementById("msg5").innerText = "Please enter the time.";
        return false;
    }
    if (!Time.match(numberPattern)) {
        document.getElementById("msg5").innerText = "Please enter the time in months only.";
        return false;
    }
    if (RateOfInterest === "") {
        document.getElementById("msg6").innerText = "Please enter the rate of interest.";
        return false;
    }
    if (!RateOfInterest.match(numberPattern)) {
        document.getElementById("msg6").innerText = "Please enter the rate of interest in digits only.";
        return false;
    }

    // Parse input values to correct data types
    var principle = parseInt(principleAmount);
    var time = parseInt(Time);
    var rateOFInterest = parseFloat(RateOfInterest);

    // Calculate simple interest
    var interest = principle * time * rateOFInterest / 100;
    var totalAmount = principle+interest
    document.getElementById("result-4").innerText = "total Amount is:"+totalAmount

    // Display result
    if (interest > 0) {
        document.getElementById("result-3").innerText = "Your simple interest is: " + interest.toFixed(2);
    }

    return false; // Prevent form submission
}
