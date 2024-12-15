

export class BankCard{
    constructor(
        public number: string,
        public expirationDate: string,
        public securityCode: number
    ){

    }

    getCardInformations(){
        // this.number.splice
        return `${this.number.slice(0,4)} ${this.number.slice(4,8)} ${this.number.slice(8, 12)} ${this.number.slice(12, 16)} - ${this.expirationDate} - ${this.securityCode}`
    }
}