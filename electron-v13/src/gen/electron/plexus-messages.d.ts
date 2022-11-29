import * as $protobuf from "protobufjs";
/** Namespace base. */
export namespace base {

    /** Represents a GreetingService */
    class GreetingService extends $protobuf.rpc.Service {

        /**
         * Constructs a new GreetingService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new GreetingService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): GreetingService;

        /**
         * Calls GetGreeting.
         * @param request GreetingRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GreetingResponse
         */
        public getGreeting(request: base.IGreetingRequest, callback: base.GreetingService.GetGreetingCallback): void;

        /**
         * Calls GetGreeting.
         * @param request GreetingRequest message or plain object
         * @returns Promise
         */
        public getGreeting(request: base.IGreetingRequest): Promise<base.GreetingResponse>;
    }

    namespace GreetingService {

        /**
         * Callback as used by {@link base.GreetingService#getGreeting}.
         * @param error Error, if any
         * @param [response] GreetingResponse
         */
        type GetGreetingCallback = (error: (Error|null), response?: base.GreetingResponse) => void;
    }

    /** Properties of a GreetingRequest. */
    interface IGreetingRequest {

        /** GreetingRequest name */
        name?: (string|null);

        /** GreetingRequest type */
        type?: (base.GreetingType|null);
    }

    /** Represents a GreetingRequest. */
    class GreetingRequest implements IGreetingRequest {

        /**
         * Constructs a new GreetingRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.IGreetingRequest);

        /** GreetingRequest name. */
        public name: string;

        /** GreetingRequest type. */
        public type: base.GreetingType;

        /**
         * Creates a new GreetingRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GreetingRequest instance
         */
        public static create(properties?: base.IGreetingRequest): base.GreetingRequest;

        /**
         * Encodes the specified GreetingRequest message. Does not implicitly {@link base.GreetingRequest.verify|verify} messages.
         * @param message GreetingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.IGreetingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GreetingRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GreetingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.GreetingRequest;

        /**
         * Verifies a GreetingRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GreetingRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GreetingRequest
         */
        public static fromObject(object: { [k: string]: any }): base.GreetingRequest;

        /**
         * Creates a plain object from a GreetingRequest message. Also converts values to other types if specified.
         * @param message GreetingRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.GreetingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GreetingRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GreetingResponse. */
    interface IGreetingResponse {

        /** GreetingResponse greeting */
        greeting?: (string|null);
    }

    /** Represents a GreetingResponse. */
    class GreetingResponse implements IGreetingResponse {

        /**
         * Constructs a new GreetingResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: base.IGreetingResponse);

        /** GreetingResponse greeting. */
        public greeting: string;

        /**
         * Creates a new GreetingResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GreetingResponse instance
         */
        public static create(properties?: base.IGreetingResponse): base.GreetingResponse;

        /**
         * Encodes the specified GreetingResponse message. Does not implicitly {@link base.GreetingResponse.verify|verify} messages.
         * @param message GreetingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: base.IGreetingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GreetingResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GreetingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): base.GreetingResponse;

        /**
         * Verifies a GreetingResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GreetingResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GreetingResponse
         */
        public static fromObject(object: { [k: string]: any }): base.GreetingResponse;

        /**
         * Creates a plain object from a GreetingResponse message. Also converts values to other types if specified.
         * @param message GreetingResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: base.GreetingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GreetingResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** GreetingType enum. */
    enum GreetingType {
        Info = 0,
        Warn = 1
    }
}
