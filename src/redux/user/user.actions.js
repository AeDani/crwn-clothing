import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => {
	return {
		type: UserActionTypes.SET_CURRENT_STATE,
		payload: user,
	};
};
