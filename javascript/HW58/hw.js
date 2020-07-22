(function() {
    'use strict';


    function newAccount() {
        return {
            balance: 0,
            performTransaction: function(deposit) {
                this.balance = (deposit + this.balance);

            }
        };

    }
    const savings = newAccount();
    const checking = newAccount();


    checking.performTransaction(75);
    savings.performTransaction(100);

    console.log(checking.balance);
    console.log(savings.balance);

    checking.performTransaction(-25);
    console.log(checking.balance);

}());