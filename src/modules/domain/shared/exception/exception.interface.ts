export interface IExceptionData<T> {
    payload: T,
    currentUserId: string | number;
    code: number
}
export abstract class DomainException<T> {
    static notFound<T>(payload: IExceptionData<T>): void {}
    static exist<T>(error: IExceptionData<T>): void {}
    static noPermission<T>(error: IExceptionData<T>): void {}
}
