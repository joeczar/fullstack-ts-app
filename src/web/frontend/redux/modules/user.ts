import { typedAction, createTypedAction } from './typedActions';
type UserState = {
  username: string | null;
};

const initialState: UserState = { username: null };

const login = (username: string): typedAction => {
  return createTypedAction('user/LOGIN', username);
};

const logout = () => {
  return createTypedAction('user/LOGOUT');
};

type UserAction = ReturnType<typeof login | typeof logout>;

export function userReducer(
  state = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case 'user/LOGIN':
      return { username: action.payload };
    case 'user/LOGOUT':
      return { username: null };
    default:
      return state;
  }
}
