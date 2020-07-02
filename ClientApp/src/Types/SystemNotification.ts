import {integerSequence} from '../store/utils';
const idMaker = integerSequence();

export class SystemNotification{
    readonly id: number;
    readonly message: string;
    readonly messageTittle: string;
    readonly type: SystemNotificationType;
    readonly generatedOn: Date;
    constructor(message:string, messageTittle:string, type: SystemNotificationType){
        this.message = message;
        this.messageTittle = messageTittle;
        this.type = type;
        this.id = idMaker.next().value as number;
        this.generatedOn = new Date()
    }
}

export enum SystemNotificationType{
    information = 1,
    warning = 2,
    error = 3
}