import { IBank } from "../interfaces/Bank";
import { ClientProperties } from "../interfaces/ClientProperties";
import { BankAccount } from "./BankAccount";
import { BankCard } from "./BankCard";
import { Client } from "./Client";


export class Bank implements IBank{
    // removeClient: (client: Client) => void;
    // getTotalBalances: () => number;
    // requestBankCard: (client: Client) => void;

    private clientsProperties: ClientProperties[] = []

    constructor(
        public name: string,
    ){

    }

    // Penser à ajoutr plusieurs comptes bancaires

    addClient(client: Client){
        const newClient: ClientProperties = {
            client: client,
            bankAccount: new BankAccount(client, Math.floor(Math.random()*10000000000000)),
            // bankCard: null
        }
        this.clientsProperties.push(newClient)
    }

    removeClient(client: Client){
        const indexOfclientToRemove = this.clientsProperties.findIndex(cP => cP.client === client)
        this.clientsProperties = this.clientsProperties.filter((cP, i) => i === indexOfclientToRemove)
    }

    getClients(){
        return this.clientsProperties.map((cP) => cP.client)
    }

    getTotalBalances(){
        return this.clientsProperties.reduce((acc, cur) => {
            return acc + cur.bankAccount.balance
        }, 0)
    }

    consult(client: Client){
        // clientsProperties.find(b => b.client === this)
        return this.clientsProperties.find(b => b.client === client)?.bankAccount || "Aucun compte bancaire n'est associé à ce client"
    }

    deposit(client: Client, amount: number){
        const bankAccount = this.clientsProperties.find(b => b.client === client)?.bankAccount
        
        if(bankAccount) bankAccount.balance += amount
    }

    withdraw(client: Client, amount: number){
        const bankAccount = this.clientsProperties.find(b => b.client === client)?.bankAccount
        
        if(bankAccount) bankAccount.balance -= amount
    }

    requestBankCard(client: Client){
        // this.clientsProperties.
        const indexOfclientToRemove = this.clientsProperties.findIndex(cP => cP.client === client)
        // this.clientsProperties[indexOfclientToRemove].bankCard = new BankCard(Math.random() * 10000000000000000, "", Math.random() * 100)
        this.clientsProperties[indexOfclientToRemove].bankAccount.bankCard = new BankCard(Math.random() * 10000000000000000, "", Math.random() * 100)
        // = this.clientsProperties.map((cP, i) => {
        //     if(i === indexOfclientToRemove){

        // }})
        // client.requestBankCard()
    }

}