import { createStore } from 'redux';

const authintitialState={
    isVerified:false,
}

function authreducer(state=authintitialState, action){
    switch (action.type) {
        case 'LOGIN':
            return {...state, isVerified:true};
        case 'LOGOUT':
            return {...state, isVerified:false};        
        default:
           return state;
    }
}


const store=createStore(authreducer);
export default store;