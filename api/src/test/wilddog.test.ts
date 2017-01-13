/**
 * Test Wilddog Service
 */
import { test } from 'ava'
import wilddogRootRef from '../services/wilddog.service'

test.only.cb('Wilddog Service Test#Sync', t => {
  wilddogRootRef.set({
    'messageboard': {
      'message2': {
        'content': 'Wilddog, Cool!',
        'presenter': 'Jack'
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
