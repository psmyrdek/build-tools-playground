import kebabCase from 'lodash-es/kebabCase'
import {unusedFunc} from './unused'

export function getColor() {
    return kebabCase('red');
}