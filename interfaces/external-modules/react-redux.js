declare module 'react-redux' {
  declare type Dispatch = (a: Action | AsyncAction) => any;
  declare type BaseDispatch = (a: Action) => Action;
  declare class Redux {}
  declare var exports: Redux;
}
