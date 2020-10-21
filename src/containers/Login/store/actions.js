import * as types from './types';

export const switchAuth = () => (
    { 
        type: types.SWITCH_AUTH 
    }
);

export const changeInputHandler = ( value, inputName ) => (
    { 
        type: types.CHANGE_INPUT, 
        value: value, inputName: inputName 
    }
);