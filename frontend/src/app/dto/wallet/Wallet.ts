export class Wallet {
    constructor(
        public walletAddress?: String,
        public privateKey?: String,
        public id?: String,
        public parent?: number,
        public showPrivateKey: Boolean = false
    ) {}

    public toggleShowPrivateKey(): void {
        this.showPrivateKey = !this.showPrivateKey;
    }
}