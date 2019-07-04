import kebabCase from 'lodash-es/kebabCase'
import {getColor} from './colors'

/* Support TypeScript */

import {add} from './utils.ts'
alert(add(1, 2));

/* Support HTML */

import template from './template.html'
document.querySelector('#root').innerHTML = template;

console.log(getColor())