export class Wallet {
    constructor(
        public address?: String,
        public id?: String,
        public parent?: number,
        public privateKey?: String,
        public showPrivateKey: Boolean = false
    ) {}

    public toggleShowPrivateKey(): void {
        this.showPrivateKey = !this.showPrivateKey;
    }
}