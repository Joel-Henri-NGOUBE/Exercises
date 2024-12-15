import { BankCard } from "./BankCard";
import { Client } from "./Client";


export class BankAccount{
    public bankCard: BankCard | null = null
    
    constructor(
        public client: Client,
        public accountNumber: string,
        public balance: number = 0
    ){

    }

    getBalance(){
        return `Votre solde est de ${this.balance} €`
    }
}