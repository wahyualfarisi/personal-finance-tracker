import * as types from './types';

export const inputHandler = (value, name) => ({ type: types.INPUT_HANDLER, value: value, name: name });