interface ICurrentAccount {
    acc_num: number,
    acc_name: string,
    amount: number,
    balance: () => void
}

interface ISavingAccount {
    acc_num: number,
    acc_name: string,
    amount: number,
    balance: () => void
}

export class Account implements ICurrentAccount, ISavingAccount {
    acc_num: number;
    acc_name: string;
    amount: number;


    constructor(acc_number: number, acc_name: string, amt: number) {
        this.acc_num = acc_number,
        this.acc_name = acc_name,
        this.amount = amt
    }

    balance(): void {
        console.log(`Account holder name ${this.acc_name} account number of ${this.acc_num} balance amount is ${this.amount}`);
    }


}

let b = new Account(121, "Selva", 24000);
b.balance();



