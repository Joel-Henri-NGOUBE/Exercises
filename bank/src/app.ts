import { Bank } from "./entities/Bank";
import { Client } from "./entities/Client";

const bankio = new Bank("Bankio")

const alice = new Client("Alice", "Ondoua", 21, "Bourg-la-reine", "Esthéticienne", 2100, 100)
const bob = new Client("Bob", "Lagardère", 49, "Paris", "Agriculteur", 1700, 150)
const charlie = new Client("Charlie", "Mathias", 54, "Nice", "Informaticien", 3000, 350)

bankio.addClient(alice)
bankio.addClient(bob)
bankio.addClient(charlie)

console.log(alice, bankio)
console.log(bankio.getClients(), bankio.getTotalBalances())

bankio.removeClient(charlie)

alice.deposit(bankio, 500)
bob.deposit(bankio, 500)
bob.withdraw(bankio, 300)

// console.log(bankio.getTotalBalances())
console.log(bankio.getClients(), bankio.getTotalBalances())

bob.requestBankCard(bankio)
console.log(bob.getCardInformations(bankio))

// bankio.
