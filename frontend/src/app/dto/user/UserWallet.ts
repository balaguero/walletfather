export class UserWallet{
    constructor(
        public address?: String,
        public privateKey?: String,
        public user?: any,
        public createdAt?: Date,
        public updatedAt?: Date
    ) {
    }
}