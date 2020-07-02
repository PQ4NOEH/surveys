export default class GenericAction<T>{
    readonly type:string;
    readonly payload:T;
    constructor(type:string, payload:T){
        this.type = type;
        this.payload = payload
    }
}