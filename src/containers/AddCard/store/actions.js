import * as types from './types';

export const selectThemeColor = ( theme ) => (
    {
        type: types.SELECT_THEME_COLOR,
        payload: theme
    }
);

export const selectTextColor = ( color ) => (
    {
        type: types.SELECT_TEXT_COLOR,
        payload: color
    }
);

export const inputHandler = (value, inputName) => (
    {
        type: types.INPUT_HANDLER,
        value,
        inputName
    }
);