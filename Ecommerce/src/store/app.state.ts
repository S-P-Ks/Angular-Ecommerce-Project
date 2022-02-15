import { User } from 'src/app/models/user';
import { UserReducer } from 'src/app/state/app.reducer';
import { USER_STATE_NAME } from 'src/app/state/app.state';
import { SharedReducer } from './Shared/shared.reducer';
import { SHARED_STATE_NAME } from './Shared/shared.selector';
import { SharedState } from './Shared/shared.state';

export interface App_State {
  user: User;
  [SHARED_STATE_NAME]: SharedState;
}

export const appReducer = {
  [USER_STATE_NAME]: UserReducer,
  [SHARED_STATE_NAME]: SharedReducer,
};
