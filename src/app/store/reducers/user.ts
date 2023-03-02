import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user';

export const initialState : {user:any} = {user:null}; 
export const userReducer = createReducer(
  initialState,
  on(UserActions.setUser, (state,{user}) => user)
);