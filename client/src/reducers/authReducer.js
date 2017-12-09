import { FETCH_USER } from './../actions/types';

export default function (state, action) {
  switch (action.type) {
    case FETCH_USER:
      // empty string ('') returns a value of false (no user logged in)
      return action.payload || false;
    default:
      // MAKE SURE THIS IS CORRECT
      return state || null;
  }
}
