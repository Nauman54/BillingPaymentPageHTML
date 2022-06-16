function ValidateFullName()
{ 
    var uname = document.getElementById("Fullname");
    var check = /^[A-Za-z]+$/;
    if(uname.value.match(check))
    {
        document.getElementById("Fullname").focus();
        return true;
    }
    else
    {
        alert('Full Name must have alphabetic characters only');
        return false;
    }
}

function ValidateEmail()
{
    var uemail = document.getElementById("Email");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        document.getElementById("Email").focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        return false;
    }
}

function ValidateAddress()
{ 
    var uadd = document.getElementById("Address");
    var check = /^[0-9a-zA-Z]+$/;
    if(uadd.value.match(check))
    {
        document.getElementById("Address").focus();
        return true;
    }
    else
    {
        alert('Address must have alphanumeric characters only');
        return false;
    }
}

function ValidateCity(){
    var ucity = document.getElementById("City");
    var check = /^[0-9a-zA-Z]+$/;
    if(ucity.value.match(check))
    {
        document.getElementById("City").focus();
        return true;
    }
    else
    {
        alert('City Name must have alphanumeric characters only');
        return false;
    }
}

function ValidateCNIC(){
    var ucnic = document.getElementById("CNIC");
    var check = /^[0-9]\{5\}-[0-9]\{7\}-[5]+$/;
    if(ucnic.value.match(check))
    {
        document.getElementById("CNIC").focus();
        return true;
    }
    else
    {
        alert('CNIC must have numeric characters only whic has 5 as last element such as 12345-1234567-5');
        return false;
    }
}

function ValidateCardName(){
    var ucardname = document.getElementById("CardName");
    var check = /^[a-zA-Z]+$/;
    if(ucardname.value.match(check))
    {
        document.getElementById("CardName").focus();
        return true;
    }
    else
    {
        alert('Card Name must have alphabetic characters only');
        return false;
    }
}

function ValidateCardNumber(){
    var ucardnumber = document.getElementById("CardNumber");
    var check = /^[0-9]\{4\}-[0-9]\{4\}-[0-9]\{4\}-[0-9]\{4\}+$/;
    if(ucardnumber.value.match(check))
    {
        document.getElementById("CardNumber").focus();
        return true;
    }
    else
    {
        alert('Card Number must have numeric characters only such as 1111-2222-3333-4444');
        return false;
    }
}

function ValidateExpMonth(){
    var uexpmonth = document.getElementById("ExpMonth");
    var check = /^[0-9]\{2\}-[0-9]\{2\}+$/;
    if(uexpmonth.value.match(check))
    {
        document.getElementById("ExpMonth").focus();
        return true;
    }
    else
    {
        alert('Expiry Month must have date (Day-Month) such as 11-22');
        return false;
    }
}

function ValidateState()
{ 
    var ustate = document.getElementById("State");
    var check = /^[0-9a-zA-Z]+$/;
    if(ustate.value.match(check))
    {
        document.getElementById("State").focus();
        return true;
    }
    else
    {
        alert('State must have alphanumeric characters only');
        return false;
    }
}

function ValidateZip()
{ 
    var uzip = document.getElementById("Zip");
    var check = /^[0-9]+$/;
    if(uzip.value.match(check))
    {
        document.getElementById("Zip").focus();
        return true;
    }
    else
    {
        alert('ZIP code must have numeric characters only');
        return false;
    }
}

function ValidateExpYear(){
    var uexpyear = document.getElementById("ExpYear");
    var check = /^[0-9]\{2\}-[0-9]\{2\}+$/;
    if(uexpyear.value.match(check))
    {
        document.getElementById("ExpYear").focus();
        return true;
    }
    else
    {
        alert('Expiry Year must have date (Year) such as 2022');
        return false;
    }
}

function ValidateCVV(){
    var ucvv = document.getElementById("CVV");
    var check = /^[0-9]\{4\}+$/;
    if(ucvv.value.match(check))
    {
        document.getElementById("CVV").focus();
        return true;
    }
    else
    {
        alert('CVV must have numeric characters only such as 1234');
        return false;
    }
}
