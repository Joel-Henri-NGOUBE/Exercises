import { IClient } from "../interfaces/Client";
import { Bank } from "./Bank";


export class Client implements IClient{
    
    constructor(
        public name: string,
        public surname: string,
        public age: number,
        public city: string,
        public job: string,
        public salary: number,
        private initialBalance: number,
        private bank: Bank
    ){

    }

    consult(){
        // Consulter directement via le client
        // Consulter via la banque (probablement ça)
        // this.bank.consult(this)
        return this.bank.consult(this)
    }

    deposit(amount: number){
        this.bank.deposit(this, amount)
    }

    withdraw(amount: number){
        this.bank.withdraw(amount)
    }

    requestBankCard(){
        this.bank.requestBankCard(this)
    }
}