import { ACTION_TYPES } from '../actions/actionTypes';

const initialState = {
    signUpUser: {},
    user: ""
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SIGN_UP_USER:
            {
                return {
                    ...state,
                    signUpUser: action.payload,
                }
            }
        case ACTION_TYPES.REMOVE_SIGN_UP_USER:
            {
                return {
                    ...state,
                    signUpUser: {},
                }
            }
        case ACTION_TYPES.USER_LOGIN:
            {
                return {
                    ...state,
                    user: action.payload,
                }
            }
        case ACTION_TYPES.USER_LOCATION:
            {
                return {
                    ...state,
                    user: {
                        ...state.user,
                        currentLocationID: action.payload.currentLocationID,
                        shippingAddress: action.payload.shippingAddress
                    }
                }
            }
        /**xw
         * Now save the newly modified array of all orders 
         * into our redux store
         */
        default:
            return state;
    }
};
