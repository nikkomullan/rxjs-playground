import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'
import fs from 'fs'

// fs.readdir('./src-server', (err, items) => {
//   if (err) console.error(err)
//   else console.log(items)
// })

const readdir$ = Rx.Observable.bindNodeCallback(fs.readdir)

readdir$('./src-server')
  .mergeMap(dirs => Rx.Observable.from(Object.values(dirs)))
  .subscribe(createSubscriber('readdir'))
