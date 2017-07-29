import { Status } from "./status";
import { User } from "./user";

export class Sample {
    constructor(
        sampleId: number,
        barcode: string,
        createdAt: string,
        userId: number,
        statusId: number,
        status: Status,
        user: User
    ) { }
}