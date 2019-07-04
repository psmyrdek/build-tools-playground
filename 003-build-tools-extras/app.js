import kebabCase from 'lodash-es/kebabCase'
import {getColor} from './colors'

/* Support TypeScript */

// import {add} from './utils.ts'
// alert(add(1, 2));

/* Support HTML */

// import template from './template.html'
// document.querySelector('#root').innerHTML = template;

/* Support SVG */

// import icon from './location.svg'
// document.querySelector('#icon-root').innerHTML = icon;

/* Lazy loading */

// document.querySelector('#btn').addEventListener('click', () => {

//     import(/* webpackChunkName: "route" */ './route')
//         .then(routeModule => {
//             const profileData = routeModule.fetchProfileData()
//             console.log(profileData)
//             return profileData
//         })

// });

console.log(getColor())