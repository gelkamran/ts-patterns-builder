import CustomResponse from './custom-response.interface';
import { Builder } from './builder.type';

/**
 * @class ResponseBuilder is an impletementation of Builder pattern to create CustomResponse instances
 */
export default class ResponseBuilder implements Builder<CustomResponse> {
    private _ok: boolean = true;
    private _redirected: boolean = true;
    private _status: number = 200;
    private _statusText: string = "OK";
    private _type: ResponseType = "basic";
    private _url: string = "";

    /**
     * setter for 'ok' property
     * @param arg 'ok' value
     * @returns {ResponseBuilder} instance
     */
    ok = (arg: boolean): ResponseBuilder => {
        this._ok = arg;
        return this;
    };

    /**
     * setter for 'redirected' property
     * @param arg 'redirected' value
     * @returns {ResponseBuilder} instance
     */
    redirected = (arg: boolean): ResponseBuilder => {
        this._redirected = arg;
        return this;
    };

    /**
     * setter for 'status' property
     * @param arg 'status' value
     * @returns {ResponseBuilder} instance
     */
    status = (arg: number): ResponseBuilder => {
        this._status = arg;
        return this;
    }

    /**
     * setter for 'statusText' property
     * @param arg 'statusText' value
     * @returns {ResponseBuilder} instance
     */
    statusText = (arg: string): ResponseBuilder => {
        this._statusText = arg;
        return this;
    }

    /**
     * setter for 'type' property
     * @param arg 'type' value
     * @returns {ResponseBuilder} instance
     */
    type = (arg: ResponseType): ResponseBuilder => {
        this._type = arg;
        return this;
    }

    /**
     * setter for 'url' property
     * @param arg 'url' value
     * @returns {ResponseBuilder} instance
     */
    url = (arg: string): ResponseBuilder => {
        this._url = arg;
        return this;
    }
    
    /**
     * Function to build object using ResponseBuilder properties
     * @returns {CustomReponse} instance
     * @throws {Error} when validation is not passing
     */
    build(): CustomResponse | never {
        /** Adding some validation */
        if (((this._status < 200 || this._status >= 400) && this._ok) ||
            ((this._status >= 200 && this._status) < 400 && !this._ok)) {
            throw new Error(`Reponse 'ok' property (${this._ok}) and status code (${this._status}) doesn't match`);
        }

        return {
            ok: this._ok,
            redirected: this._redirected,
            status: this._status,
            statusText: this._statusText,
            type: this._type,
            url: this._url,
        }
    }
}