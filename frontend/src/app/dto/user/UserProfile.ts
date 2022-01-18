import { UserWallet } from "./UserWallet";

export class UserProfile{
    constructor(
        public email?: String,
        public wallet?: UserWallet,
        public createdAt?: Date,
        public updatedAt?: Date
    ) {

    }
}