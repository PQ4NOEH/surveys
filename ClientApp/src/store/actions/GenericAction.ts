export default interface GenericAction<T>{
    readonly type:string;
    readonly payload:T;
}