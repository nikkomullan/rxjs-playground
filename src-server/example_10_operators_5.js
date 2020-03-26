import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'

// Rx.Observable.range(1, 100)
//   .bufferCount(25)
//   .subscribe(createSubscriber('bufferCount1'))

// Rx.Observable.interval(500)
//   .startWith(-1)
//   .bufferTime(2000)
//  // .buffer(Rx.Observable.interval(2000))
//   .take(2)
//   .subscribe(createSubscriber('bufferTime1'))

// const stopSubject$ = new Rx.Subject()
// Rx.Observable.interval(500)
//   .buffer(stopSubject$)
//   .subscribe(createSubscriber('bufferTime2'))
// setTimeout(() => stopSubject$.next(), 2000)

Rx.Observable.range(1, 10)
  // .merge(Rx.Observable.never())
  .toArray()
  .subscribe(createSubscriber('range'))
