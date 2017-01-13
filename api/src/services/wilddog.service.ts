/**
 * Wilddog Service
 */
import * as wilddog from 'wilddog'
import config from '../config/environment'
import * as WilddogTokenGenerator from 'wilddog-token-generator'
import logging from '../services/logging.service'

const logger = logging.getLogger('wilddog.service');

wilddog.initializeApp({
  syncURL: `https://${config.wilddog.appid}.wilddogio.com`,
  authDomain: `${config.wilddog.appid}.wilddog.com`
})

const wdSync = wilddog.sync()
const wdTokenGenerator = new WilddogTokenGenerator(config.wilddog.appsecret);

var wdLogin = function () {
  // 如果 admin 是true的情况下 ，默认是管理员身份，就没有uid了
  // 这里 uid: wdLogin只是为了避免sdk抛出错误
  const token = wdTokenGenerator.createToken({ uid: 'wdLogin' }, { admin: true });
  return new Promise((resolve, reject) => {
    wilddog.auth()
      .signInWithCustomToken(token)
      .then(function (user) {
        /**
         * {
            "uid": "",
            "displayName": "",
            "phone": "",
            "email": "",
            "photoURL": "",
            "providerId": "custom",
            "isAnonymous": false,
            "emailVerified": false,
            "phoneVerified": false,
            "providerData": [],
            "refreshToken": null
          }
         */
        logger.debug('wdLogin', JSON.stringify(user))
        resolve(user)
      })
      .catch(function (err) {
        logger.error('wdLogin', err)
        reject(err)
      })
  })
}

// 获取当前用户并管理用户
// Wilddog.auth().currentUser()

export { wilddog, wdLogin, wdSync, wdTokenGenerator }
export default wilddog