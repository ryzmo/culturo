import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Profile {
  'profilePicUrl' : string,
  'username' : string,
  'email' : string,
}
export interface _SERVICE {
  'getLoggedInUser' : ActorMethod<[], string>,
  'getLoginStatus' : ActorMethod<[], boolean>,
  'getProfile' : ActorMethod<[], Profile>,
  'login' : ActorMethod<[string], string>,
  'logout' : ActorMethod<[], string>,
  'updateProfile' : ActorMethod<[string, string, string], string>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
