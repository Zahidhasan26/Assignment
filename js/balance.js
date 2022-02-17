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
    document.getElementById('total-expense').innerText = expenseCost();
    document.getElementById('total-balance').innerText = balanceAfterExpense();
    
})

