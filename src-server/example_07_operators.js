import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'

// .merge - merges one sequence into another
// Rx.Observable.interval(1000)
//   .map(a => `${a} seconds`)
//   .merge(Rx.Observable.interval(500).map(a => `${a} half seconds`))
//   .take(10)
//   .subscribe(createSubscriber('merge1'))

// Rx.Observable.merge(
//   Rx.Observable.interval(1000).map(a => `${a} seconds`),
//   Rx.Observable.interval(500).map(a => `${a} half seconds`)
// )
//   .take(10)
//   .subscribe(createSubscriber('merge2'))

// const currentUser$ = Rx.Observable.merge(
//   socket.on$('login').map(user => processUser(user)),
//   socket.on$('logout').map(() => null)
// )

// Rx.Observable.range(1, 5)
//   .concat(Rx.Observable.range(10, 3))
//   .subscribe(createSubscriber('concat1'))

Rx.Observable.concat(
  Rx.Observable.interval(500)
    .map(a => `${a} seconds`)
    .take(3),
  Rx.Observable.interval(250)
    .map(a => `${a} half seconds`)
    .take(3)
).subscribe(createSubscriber('concat2'))
