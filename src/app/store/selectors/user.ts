import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectUser : any = createFeatureSelector<any>('user');

export const selectUserCollection : any = createSelector(
  selectUser,
  (user : any) => {
    return user;
  }
);