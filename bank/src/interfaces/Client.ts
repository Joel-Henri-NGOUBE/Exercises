import { Bank } from "../entities/Bank"
import { BankAccount } from "../entities/BankAccount"

export interface IClient{
    name: string,
    surname: string,
    age: number,
    city: string,
    job: string,
    salary: number,
    consult:(bank: Bank) => BankAccount | string,
    deposit: (bank: Bank,amount: number) => void
    withdraw: (bank: Bank,amount: number) => void
    requestBankCard: (bank: Bank) => void
}