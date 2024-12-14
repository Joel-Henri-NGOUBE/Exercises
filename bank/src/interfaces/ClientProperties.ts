import { BankAccount } from "../entities/BankAccount";
import { BankCard } from "../entities/BankCard";
import { Client } from "../entities/Client";

export interface ClientProperties{
    client: Client,
    bankAccount: BankAccount,
    // bankCard: BankCard | null
}