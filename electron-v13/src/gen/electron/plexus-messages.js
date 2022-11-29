/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.plexus || ($protobuf.roots.plexus = {});

$root.base = (function() {

    /**
     * Namespace base.
     * @exports base
     * @namespace
     */
    var base = {};

    base.GreetingService = (function() {

        /**
         * Constructs a new GreetingService service.
         * @memberof base
         * @classdesc Represents a GreetingService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function GreetingService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (GreetingService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = GreetingService;

        /**
         * Creates new GreetingService service using the specified rpc implementation.
         * @function create
         * @memberof base.GreetingService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {GreetingService} RPC service. Useful where requests and/or responses are streamed.
         */
        GreetingService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link base.GreetingService#getGreeting}.
         * @memberof base.GreetingService
         * @typedef GetGreetingCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {base.GreetingResponse} [response] GreetingResponse
         */

        /**
         * Calls GetGreeting.
         * @function getGreeting
         * @memberof base.GreetingService
         * @instance
         * @param {base.IGreetingRequest} request GreetingRequest message or plain object
         * @param {base.GreetingService.GetGreetingCallback} callback Node-style callback called with the error, if any, and GreetingResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GreetingService.prototype.getGreeting = function getGreeting(request, callback) {
            return this.rpcCall(getGreeting, $root.base.GreetingRequest, $root.base.GreetingResponse, request, callback);
        }, "name", { value: "GetGreeting" });

        /**
         * Calls GetGreeting.
         * @function getGreeting
         * @memberof base.GreetingService
         * @instance
         * @param {base.IGreetingRequest} request GreetingRequest message or plain object
         * @returns {Promise<base.GreetingResponse>} Promise
         * @variation 2
         */

        return GreetingService;
    })();

    base.GreetingRequest = (function() {

        /**
         * Properties of a GreetingRequest.
         * @memberof base
         * @interface IGreetingRequest
         * @property {string|null} [name] GreetingRequest name
         * @property {base.GreetingType|null} [type] GreetingRequest type
         */

        /**
         * Constructs a new GreetingRequest.
         * @memberof base
         * @classdesc Represents a GreetingRequest.
         * @implements IGreetingRequest
         * @constructor
         * @param {base.IGreetingRequest=} [properties] Properties to set
         */
        function GreetingRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GreetingRequest name.
         * @member {string} name
         * @memberof base.GreetingRequest
         * @instance
         */
        GreetingRequest.prototype.name = "";

        /**
         * GreetingRequest type.
         * @member {base.GreetingType} type
         * @memberof base.GreetingRequest
         * @instance
         */
        GreetingRequest.prototype.type = 0;

        /**
         * Creates a new GreetingRequest instance using the specified properties.
         * @function create
         * @memberof base.GreetingRequest
         * @static
         * @param {base.IGreetingRequest=} [properties] Properties to set
         * @returns {base.GreetingRequest} GreetingRequest instance
         */
        GreetingRequest.create = function create(properties) {
            return new GreetingRequest(properties);
        };

        /**
         * Encodes the specified GreetingRequest message. Does not implicitly {@link base.GreetingRequest.verify|verify} messages.
         * @function encode
         * @memberof base.GreetingRequest
         * @static
         * @param {base.IGreetingRequest} message GreetingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GreetingRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            return writer;
        };

        /**
         * Decodes a GreetingRequest message from the specified reader or buffer.
         * @function decode
         * @memberof base.GreetingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {base.GreetingRequest} GreetingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GreetingRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.base.GreetingRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Verifies a GreetingRequest message.
         * @function verify
         * @memberof base.GreetingRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GreetingRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a GreetingRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof base.GreetingRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {base.GreetingRequest} GreetingRequest
         */
        GreetingRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.base.GreetingRequest)
                return object;
            var message = new $root.base.GreetingRequest();
            if (object.name != null)
                message.name = String(object.name);
            switch (object.type) {
            case "Info":
            case 0:
                message.type = 0;
                break;
            case "Warn":
            case 1:
                message.type = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a GreetingRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof base.GreetingRequest
         * @static
         * @param {base.GreetingRequest} message GreetingRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GreetingRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.type = options.enums === String ? "Info" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.base.GreetingType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this GreetingRequest to JSON.
         * @function toJSON
         * @memberof base.GreetingRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GreetingRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GreetingRequest;
    })();

    base.GreetingResponse = (function() {

        /**
         * Properties of a GreetingResponse.
         * @memberof base
         * @interface IGreetingResponse
         * @property {string|null} [greeting] GreetingResponse greeting
         */

        /**
         * Constructs a new GreetingResponse.
         * @memberof base
         * @classdesc Represents a GreetingResponse.
         * @implements IGreetingResponse
         * @constructor
         * @param {base.IGreetingResponse=} [properties] Properties to set
         */
        function GreetingResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GreetingResponse greeting.
         * @member {string} greeting
         * @memberof base.GreetingResponse
         * @instance
         */
        GreetingResponse.prototype.greeting = "";

        /**
         * Creates a new GreetingResponse instance using the specified properties.
         * @function create
         * @memberof base.GreetingResponse
         * @static
         * @param {base.IGreetingResponse=} [properties] Properties to set
         * @returns {base.GreetingResponse} GreetingResponse instance
         */
        GreetingResponse.create = function create(properties) {
            return new GreetingResponse(properties);
        };

        /**
         * Encodes the specified GreetingResponse message. Does not implicitly {@link base.GreetingResponse.verify|verify} messages.
         * @function encode
         * @memberof base.GreetingResponse
         * @static
         * @param {base.IGreetingResponse} message GreetingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GreetingResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.greeting != null && Object.hasOwnProperty.call(message, "greeting"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.greeting);
            return writer;
        };

        /**
         * Decodes a GreetingResponse message from the specified reader or buffer.
         * @function decode
         * @memberof base.GreetingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {base.GreetingResponse} GreetingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GreetingResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.base.GreetingResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.greeting = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Verifies a GreetingResponse message.
         * @function verify
         * @memberof base.GreetingResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GreetingResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.greeting != null && message.hasOwnProperty("greeting"))
                if (!$util.isString(message.greeting))
                    return "greeting: string expected";
            return null;
        };

        /**
         * Creates a GreetingResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof base.GreetingResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {base.GreetingResponse} GreetingResponse
         */
        GreetingResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.base.GreetingResponse)
                return object;
            var message = new $root.base.GreetingResponse();
            if (object.greeting != null)
                message.greeting = String(object.greeting);
            return message;
        };

        /**
         * Creates a plain object from a GreetingResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof base.GreetingResponse
         * @static
         * @param {base.GreetingResponse} message GreetingResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GreetingResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.greeting = "";
            if (message.greeting != null && message.hasOwnProperty("greeting"))
                object.greeting = message.greeting;
            return object;
        };

        /**
         * Converts this GreetingResponse to JSON.
         * @function toJSON
         * @memberof base.GreetingResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GreetingResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GreetingResponse;
    })();

    /**
     * GreetingType enum.
     * @name base.GreetingType
     * @enum {number}
     * @property {number} Info=0 Info value
     * @property {number} Warn=1 Warn value
     */
    base.GreetingType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Info"] = 0;
        values[valuesById[1] = "Warn"] = 1;
        return values;
    })();

    return base;
})();

module.exports = $root;
