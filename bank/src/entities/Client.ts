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
        public initialBalance: number,
        // private bank: Bank
    ){

    }

    consult(bank: Bank){
        // Consulter directement via le client
        // Consulter via la banque (probablement ça)
        // this.bank.consult(this)
        return bank.consult(this)
    }

    deposit(bank: Bank,amount: number){
        bank.deposit(this, amount)
    }

    withdraw(bank: Bank,amount: number){
        bank.withdraw(this, amount)
    }

    getCardInformations(bank: Bank){
        return bank.getCardInformations(this)
    }

    requestBankCard(bank: Bank){
        bank.requestBankCard(this)
    }
}