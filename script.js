function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear + parseInt(years);

    if (principal > 0) {
        document.getElementById("result1").innerHTML = "If you deposit " + principal + ",";
        document.getElementById("result2").innerHTML = "at an interest rate of " + rate + "% ,";
        document.getElementById("result3").innerHTML = "You will receive an amount of " + interest + ",";
        document.getElementById("result4").innerHTML = "in the year " + year + ",";
    } else {
        window.alert("Enter a positive number");
        document.getElementById("principal").focus()
    }
    
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval +"%";
}
