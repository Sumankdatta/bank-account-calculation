document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawAmountField = document.getElementById('withdraw');
    const withdrawAmountFieldString = withdrawAmountField.value;
    const withdrawAmount = parseFloat(withdrawAmountFieldString);

    const previousWithdrawBalance = document.getElementById('withdraw-balance');
    const previousWithdrawBalanceString = previousWithdrawBalance.innerText;
    const previousBalanceAmount = parseFloat(previousWithdrawBalanceString);

    const totalWithdraw = withdrawAmount + previousBalanceAmount;

    previousWithdrawBalance.innerText = totalWithdraw.toFixed(2)

    withdrawAmountField.value = ''

    // balance

    const previousTotalBalance = document.getElementById('balance');
    const previousTotalBalanceString = previousTotalBalance.innerText;
    const totalBalanceAmount = parseFloat(previousTotalBalanceString)

    const totalBalance = totalBalanceAmount - withdrawAmount

    previousTotalBalance.innerText = totalBalance


})