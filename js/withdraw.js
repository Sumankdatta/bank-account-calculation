document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawAmountField = document.getElementById('withdraw');
    const withdrawAmountFieldString = withdrawAmountField.value;
    const withdrawAmount = parseFloat(withdrawAmountFieldString);

    withdrawAmountField.value = ''

    if (isNaN(withdrawAmount)) {
        return alert('Zero amount')
    }


    const previousWithdrawBalance = document.getElementById('withdraw-balance');
    const previousWithdrawBalanceString = previousWithdrawBalance.innerText;
    const previousBalanceAmount = parseFloat(previousWithdrawBalanceString);




    // balance

    const previousTotalBalance = document.getElementById('balance');
    const previousTotalBalanceString = previousTotalBalance.innerText;
    const totalBalanceAmount = parseFloat(previousTotalBalanceString)

    if (withdrawAmount > totalBalanceAmount) {
        alert('You have no enough money')
        return;
    }
    //step3
    const totalWithdraw = withdrawAmount + previousBalanceAmount;
    previousWithdrawBalance.innerText = totalWithdraw.toFixed(2)

    //final step

    const totalBalance = totalBalanceAmount - withdrawAmount
    previousTotalBalance.innerText = totalBalance


})