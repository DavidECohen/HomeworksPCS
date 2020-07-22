(function() {
    'use strict';
    const savings = newAccount();
    const checking = newAccount();

    function newAccount() {
        return {
            balance: 10,
        };
    }

    function Transaction(deposit) {
        this.balance = (deposit + this.balance);

    }
    Transaction.call(savings, 100);
    Transaction.apply(checking, [200]);
    const binder = Transaction.bind(savings);

    console.log(savings.balance);
    console.log(checking.balance);
    binder(300);
    console.log(savings.balance);


}());