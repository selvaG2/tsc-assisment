var Account = /** @class */ (function () {
    function Account(acc_number, acc_name, amt, amt1) {
        this.acc_num = acc_number,
            this.acc_name = acc_name,
            this.amount = amt,
            this.amount1 = amt1;
    }
    Account.prototype.balance = function () {
        console.log("Account holder name ".concat(this.acc_name, " account number of ").concat(this.acc_num, " balance amount of currtent account ").concat(this.amount, " balance of saving account ").concat(this.amount1));
    };
    return Account;
}());
var b = new Account(121, "Selva", 24000, 42000);
b.balance();
