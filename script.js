console.log("hi");

const customerId = 788989;
let customerName = 'swarnim';
let customerEmai = 'swar@gmail.in';
let customerState = 'MP';

function Validation(){

    if(customerEmai == "" && customerId == "")
    {
        console.log("please enter both details");
    }
    else{
        console.log("please varify your account"); 
    }
}

Validation();