export interface user {
  name: string;
  email: string;
}
export const USER_STATE_NAME = 'user';

export const intialState: user = {
  name: '',
  email: '',
};
