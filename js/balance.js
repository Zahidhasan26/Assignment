// function for calculating expenses
function expenseCost (){
    const foodCost = document.getElementById("food-expense").value;
    const rentCost = document.getElementById("rent-expense").value;
    const clothesCost = document.getElementById("clothes-expense").value;
    let expenses = parseInt(foodCost)+parseInt(rentCost)+parseInt(clothesCost);
    return expenses;
}
function balanceAfterExpense(){
    const income = document.getElementById('income-recieved').value;
    const balance = parseInt(income) - expenseCost();
    return balance;
}
   
// Final Calculate Button
document.getElementById("calculate-button").addEventListener('click',function(){

    const income = document.getElementById('income-recieved').value;
    const foodCost = document.getElementById("food-expense").value;
    const rentCost = document.getElementById("rent-expense").value;
    const clothesCost = document.getElementById("clothes-expense").value;
    if (income<0 || foodCost<0||rentCost<0||clothesCost< 0){
        alert('Please enter positive number only')
    }
 else {
    document.getElementById('total-expense').innerText = expenseCost();
    document.getElementById('total-balance').innerText = balanceAfterExpense();
 }
})

// Savings section functions 
function savingAmount(){
    const saveByPercent = document.getElementById('save-percent').value;
    const incomeTotal = document.getElementById('income-recieved').value;
    let savingTotal = (parseInt(incomeTotal)* parseInt(saveByPercent))/100;
    return savingTotal;
}
function remainingBalance (){
    const incomeTotal = document.getElementById('income-recieved').value;
    let remainingBalanceTotal = parseInt(incomeTotal) - savingAmount();
    return remainingBalanceTotal;
}
// save button
    document.getElementById("calculate-saving").addEventListener('click',function(){
        const income = document.getElementById('income-recieved').value;
        const saveByPercent = document.getElementById('save-percent').value;
        const incomeTotal = document.getElementById('income-recieved').value;
    if (income<0 || saveByPercent<0||incomeTotal<0){
        alert('Please enter positive number only')
    }
        else{
            document.getElementById('saving-amount').innerText = savingAmount();
        document.getElementById('remaining-balance').innerText = remainingBalance();
        }
        
    })
