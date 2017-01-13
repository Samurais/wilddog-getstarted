/**
 * Test Wilddog Service
 */
import { test } from 'ava'
import { wdSync, wdLogin } from '../services/wilddog.service'

const wilddogRootRef = wdSync.ref()

test.skip.cb('Wilddog Service Test#Sync', t => {
  wilddogRootRef.set({
    'chatrooms': {
      'message3': {
        'content': 'Wilddog, Cool!',
        'presenter': 'hain'
      }
    }
  })
    .then(function (result) {
      console.log('done', result)
      t.pass()
      t.end()
    })
    .catch(function (err) {
      console.error(err)
      t.fail()
      t.end()
    })
})

test.only.cb('Wilddog Service#wdLogin', t => {
    wdLogin()
      .then(function(res){
        t.pass()
        t.end()
      })
      .catch(function(err){
        console.log(err )
        t.fail()
        t.end()
      })
})
