import { InternalGenericClientApi, ClientApiBuilder, MethodInvocationContext, Completion, ClientConnectRequest, StreamingInvocationClient, GenericClientApi, InvocationRequestInfo, InvocationClient, GenericRequest, GenericClientApiBase } from '@plexus-interop/client';
import { ProvidedMethodReference, ServiceDiscoveryRequest, ServiceDiscoveryResponse, MethodDiscoveryRequest, MethodDiscoveryResponse, GenericClientApiBuilder, ValueHandler } from '@plexus-interop/client';
import { TransportConnection, UniqueId } from '@plexus-interop/transport-common';
import { Arrays, Observer } from '@plexus-interop/common';
import { InvocationObserver, InvocationObserverConverter, ContainerAwareClientAPIBuilder } from '@plexus-interop/client';

import * as plexus from './plexus-messages';

export interface CancellableUnaryResponse<T> {
    invocation: InvocationClient;
    response: Promise<T>;
}

/**
 *  Proxy interface of WebGreetingService service, to be consumed by Client API
 */
export abstract class WebGreetingServiceProxy {

    public abstract getGreeting(request: plexus.base.IGreetingRequest): Promise<plexus.base.IGreetingResponse>;
    public abstract getGreetingWithCancellation(request: plexus.base.IGreetingRequest): Promise<CancellableUnaryResponse<plexus.base.IGreetingResponse>>;
}

/**
 *  Internal Proxy implementation for WebGreetingService service
 */
export class WebGreetingServiceProxyImpl implements WebGreetingServiceProxy {

    constructor(private readonly genericClient: GenericClientApi) { }

    public getGreeting(request: plexus.base.IGreetingRequest): Promise<plexus.base.IGreetingResponse> {
        const invocationInfo: InvocationRequestInfo = {
            methodId: 'GetGreeting',
            serviceId: 'base.GreetingService',
            serviceAlias: 'WebGreetingService'
        };
        return new Promise((resolve, reject) => {
            this.genericClient.sendUnaryRequest(invocationInfo, request, {
                value: responsePayload => resolve(responsePayload),
                error: e => reject(e)
            }, plexus.base.GreetingRequest, plexus.base.GreetingResponse);
        });
    }
    public getGreetingWithCancellation(request: plexus.base.IGreetingRequest): Promise<CancellableUnaryResponse<plexus.base.IGreetingResponse>> {
        const invocationInfo: InvocationRequestInfo = {
            methodId: 'GetGreeting',
            serviceId: 'base.GreetingService',
            serviceAlias: 'WebGreetingService'
        };
        return new Promise<CancellableUnaryResponse<plexus.base.IGreetingResponse>>((resolveInvocation, rejectInvocation) => {
            const responsePromise = new Promise<plexus.base.IGreetingResponse>((resolveResponse, rejectResponse) => {
                this.genericClient.sendUnaryRequest(invocationInfo, request, {
                    value: responsePayload => resolveResponse(responsePayload),
                    error: e => rejectResponse(e)
                }, plexus.base.GreetingRequest, plexus.base.GreetingResponse)
                .then(invocationClient => resolveInvocation({ invocation: invocationClient, response: responsePromise }))
                .catch(rejectInvocation);
            });
        });
    }

}

/**
 * Main client API
 */
export interface ConsumerClient extends GenericClientApi  {

    getWebGreetingServiceProxy(): WebGreetingServiceProxy;

}

/**
 * Client's API internal implementation
 */
class ConsumerClientImpl extends GenericClientApiBase implements ConsumerClient {

    public constructor(
        private readonly genericClient: GenericClientApi,
        private readonly webGreetingServiceProxy: WebGreetingServiceProxy
    ) {
        super(genericClient);
    }

    public getWebGreetingServiceProxy(): WebGreetingServiceProxy {
        return this.webGreetingServiceProxy;
    }

}


/**
 * Client API builder
 */
export class ConsumerClientBuilder implements ClientApiBuilder<ConsumerClient, ConsumerClientBuilder> {

    protected genericBuilder: GenericClientApiBuilder =
        new ContainerAwareClientAPIBuilder()
            .withApplicationId('base.electron.Consumer');



    public withClientApiDecorator(clientApiDecorator: (client: InternalGenericClientApi) => Promise<GenericClientApi>): ConsumerClientBuilder {
        this.genericBuilder.withClientApiDecorator(clientApiDecorator);
        return this;
    }

    public withClientExtension(extension: (builder: ClientApiBuilder<ConsumerClient, ConsumerClientBuilder>) => void): ConsumerClientBuilder {
        extension(this);
        return this;
    }

    public withTransportConnectionProvider(provider: () => Promise<TransportConnection>): ConsumerClientBuilder {
        this.genericBuilder.withTransportConnectionProvider(provider);
        return this;
    }

    public withAppInstanceId(appInstanceId: UniqueId): ConsumerClientBuilder {
        this.genericBuilder.withAppInstanceId(appInstanceId);
        return this;
    }

    public withAppId(appId: string): ConsumerClientBuilder {
        this.genericBuilder.withApplicationId(appId);
        return this;
    }

    public withDisconnectCallback(onDisconnect: () => Promise<void>): ConsumerClientBuilder {
        this.genericBuilder.withDisconnectCallback(onDisconnect);
        return this;
    }

    public connect(): Promise<ConsumerClient> {
        return this.genericBuilder
            .connect()
            .then(genericClient => new ConsumerClientImpl(
                genericClient,
                new WebGreetingServiceProxyImpl(genericClient)
                ));
    }
}
