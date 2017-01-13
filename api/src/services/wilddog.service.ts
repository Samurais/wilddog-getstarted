/**
 * Wilddog Service
 */
import * as wilddog from 'wilddog'
import config from '../config/environment'

const syncURL = `https://${config.wilddog.appid}.wilddogio.com`

// https://<YOUR WILDDOG>.wilddogio.com

console.log('app', syncURL)
wilddog.initializeApp({
  syncURL: syncURL
})

const ref = wilddog.sync().ref()

export default ref
