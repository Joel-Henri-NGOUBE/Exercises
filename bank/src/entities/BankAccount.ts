import { BankCard } from "./BankCard";
import { Client } from "./Client";


export class BankAccount{
    public balance: number = 0
    public bankCard: BankCard | null = null

    constructor(
        public client: Client,
        public accountNumber: number,
    ){

    }

    getBalance(){
        return `Votre solde est de ${this.balance} €`
    }
}