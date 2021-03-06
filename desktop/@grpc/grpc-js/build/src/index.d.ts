/// <reference types="node" />
import { ClientDuplexStream, ClientReadableStream, ClientUnaryCall, ClientWritableStream, ServiceError } from './call';
import { CallCredentials } from './call-credentials';
import { Deadline, StatusObject } from './call-stream';
import { Channel, ConnectivityState, ChannelImplementation } from './channel';
import { ChannelCredentials } from './channel-credentials';
import { CallOptions, Client, CallInvocationTransformer, CallProperties } from './client';
import { LogVerbosity, Status } from './constants';
import { Deserialize, loadPackageDefinition, makeClientConstructor, MethodDefinition, Serialize, ServiceDefinition } from './make-client';
import { Metadata } from './metadata';
import { Server, UntypedHandleCall, UntypedServiceImplementation } from './server';
import { KeyCertPair, ServerCredentials } from './server-credentials';
import { StatusBuilder } from './status-builder';
import { handleBidiStreamingCall, handleServerStreamingCall, handleUnaryCall, ServerUnaryCall, ServerReadableStream, ServerWritableStream, ServerDuplexStream } from './server-call';
export interface OAuth2Client {
    getRequestMetadata: (url: string, callback: (err: Error | null, headers?: {
        [index: string]: string;
    }) => void) => void;
    getRequestHeaders: (url?: string) => Promise<{
        [index: string]: string;
    }>;
}
/**** Client Credentials ****/
export declare const credentials: {
    [key: string]: Function;
};
/**** Metadata ****/
export { Metadata };
/**** Constants ****/
export { LogVerbosity as logVerbosity, Status as status, ConnectivityState as connectivityState, };
/**** Client ****/
export { Client, loadPackageDefinition, makeClientConstructor, makeClientConstructor as makeGenericClientConstructor, CallProperties, CallInvocationTransformer, ChannelImplementation as Channel, Channel as ChannelInterface };
/**
 * Close a Client object.
 * @param client The client to close.
 */
export declare const closeClient: (client: Client) => void;
export declare const waitForClientReady: (client: Client, deadline: number | Date, callback: (error?: Error | undefined) => void) => void;
export { ChannelCredentials, CallCredentials, Deadline, Serialize as serialize, Deserialize as deserialize, ClientUnaryCall, ClientReadableStream, ClientWritableStream, ClientDuplexStream, CallOptions, MethodDefinition, StatusObject, ServiceError, ServerUnaryCall, ServerReadableStream, ServerWritableStream, ServerDuplexStream, ServiceDefinition, UntypedHandleCall, UntypedServiceImplementation, };
/**** Server ****/
export { handleBidiStreamingCall, handleServerStreamingCall, handleUnaryCall };
export declare type Call = ClientUnaryCall | ClientReadableStream<any> | ClientWritableStream<any> | ClientDuplexStream<any, any>;
/**** Unimplemented function stubs ****/
export declare const loadObject: (value: any, options: any) => never;
export declare const load: (filename: any, format: any, options: any) => never;
export declare const setLogger: (logger: Partial<Console>) => void;
export declare const setLogVerbosity: (verbosity: LogVerbosity) => void;
export { Server };
export { ServerCredentials };
export { KeyCertPair };
export declare const getClientChannel: (client: Client) => Channel;
export { StatusBuilder };
export { Listener } from './call-stream';
export { Requester, ListenerBuilder, RequesterBuilder, Interceptor, InterceptorProvider, InterceptingCall, InterceptorConfigurationError, } from './client-interceptors';
export { GrpcObject } from './make-client';
