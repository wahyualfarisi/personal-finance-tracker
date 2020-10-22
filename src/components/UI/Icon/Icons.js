import React from 'react';
import symbolDefs from './../../../assets/symbol-defs.svg';

const Icon = ({ name }) => (
    <use xlinkHref={`${symbolDefs}#icon-${name}`}></use>
)

export default Icon;