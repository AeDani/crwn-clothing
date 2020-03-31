import { UserActionTypes } from './user.types';

console.log(UserActionTypes.SET_CURRENT_STATE);

export const setCurrentUser = user => {
	return {
		type: UserActionTypes.SET_CURRENT_STATE,
		payload: user
	};
};
