import { createAction, props } from '@ngrx/store';

export const setUser = createAction(
  '[Add User] User',
  props<{user:any}>()
);