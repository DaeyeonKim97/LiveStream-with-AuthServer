import { createActions, handleActions} from "redux-actions";

const isLogged = false;

export const LOGIN = 'auth/LOGIN';
export const LOGOUT = 'auth/LOGOUT';

const actions = createActions({
    [LOGIN] : () => {},
    [LOGOUT] : () => {}
})

const authReducer = handleActions(
    {
        [LOGIN]: ()=>{
            return true;
        },
        [LOGOUT]: ()=>{
            return false;
        }
    },
    isLogged
);

export default authReducer;