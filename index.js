/* @flow */
import { save, find } from '../src'
const name = 'auto-cookie'
const expires = 0
save(name, 'data', expires)
console.log(find(name, expires))
