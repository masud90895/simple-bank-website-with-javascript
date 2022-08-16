document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput =document.getElementById('deposit-input')
    const depositInputValue = depositInput.value;
    const inputDeposit =parseFloat(depositInputValue);
    if (isNaN(inputDeposit)) {
        return alert('please input deposit amount');
      }
    
    let deposit = document.getElementById('deposit');
    let depositText = parseFloat(deposit.innerText); 

    let totalDeposit = inputDeposit + depositText;
    deposit.innerText= totalDeposit;

    let balance = document.getElementById('balance');
    let balanceText =parseFloat(balance.innerText);

    let totalBalance= balanceText + inputDeposit;
    balance.innerText = totalBalance;


    depositInput.value= '';
    
})


// withdraw 

document.getElementById('withdraw-btn').addEventListener('click', function(){
    let inputWithdraw = document.getElementById('input-withdraw');
    let inputWithdrawValue = parseFloat(inputWithdraw.value);
    if (isNaN(inputWithdrawValue)) {
        return alert('please input withdraw amount');
      }
    
    let withdrawBalance =document.getElementById('withdraw-balance');
    let withdrawText = parseFloat(withdrawBalance.innerText);

    let totalWithdrawBalance = inputWithdrawValue + withdrawText;
    withdrawBalance.innerText = totalWithdrawBalance;


    let balance = document.getElementById('balance');
    let balanceText =parseFloat(balance.innerText);

    if(inputWithdrawValue > balanceText){
        return alert("You Don't Have Much Money")
    }

    let balanceTotal = balanceText - inputWithdrawValue;
    balance.innerText = balanceTotal;

    inputWithdraw.value ='';

})