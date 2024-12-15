import { Client } from "../entities/Client";
import { ClientProperties } from "./ClientProperties";

export interface IBank{
    name: string,
    // clients: ClientProperties[],
    addClient: (client: Client) => void,
    removeClient: (client: Client) => void,
    getClients: () => string,
    // getClients: () => Client[],
    getTotalBalances: () => number,
    requestBankCard: (client: Client) => void
}