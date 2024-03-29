document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositAmountField = document.getElementById('deposit-field')
    const depositAmountString = depositAmountField.value;
    const depositAmount = parseFloat(depositAmountString);

    depositAmountField.value = ''

    if (isNaN(depositAmount)) {
        return alert('Zero amount')
    }

    const previousDeposit = document.getElementById('deposit-total')
    const previousBalanceAmountString = previousDeposit.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString)

    const totalDeposit = previousBalanceAmount + depositAmount;

    previousDeposit.innerText = totalDeposit.toFixed(2)


    // Total balance account:

    const balanceAmountField = document.getElementById('balance');
    const balanceAmountString = balanceAmountField.innerText;
    const balanceAmount = parseFloat(balanceAmountString);

    const totalBalanceAmount = depositAmount + balanceAmount;
    balanceAmountField.innerText = totalBalanceAmount
})