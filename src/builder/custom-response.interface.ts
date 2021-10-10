/**
 * @interface CustomReponse to create builder typecheck and create custom responce instances
 */
export default interface CustomResponse {
    readonly ok: boolean;
    readonly redirected: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly type: ResponseType;
    readonly url: string;
}