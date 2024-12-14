import { BankAccount } from "../entities/BankAccount"

export interface IClient{
    name: string,
    surname: string,
    age: number,
    city: string,
    job: string,
    salary: number,
    consult:() => BankAccount | string,
    deposit: (amount: number) => void
    withdraw: (amount: number) => void
    requestBankCard: () => void
}