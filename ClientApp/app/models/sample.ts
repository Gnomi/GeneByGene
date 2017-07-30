import { Status } from "./status";
import { User } from "./user";

export class Sample {
    constructor(
        public sampleId: number,
        public barcode: string,
        public createdAt: Date,
        public userId: number,
        public statusId: number,
        public status: Status,
        public user: User
    ) { }
}