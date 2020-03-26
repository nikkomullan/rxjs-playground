import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'

// function arrayZip(array1, array2, selector) {
//   const count = Math.min(array1.length, array2.length)
//   const results = []

//   for (let i = 0; i < count; i++) {
//     const combined = selector(array1[i], array2[i])
//     results.push(combined)
//   }

//   return results
// }

// const a = [1, 0, 3, 6, 7, 5]
// const b = [2, 4, 7, 4, 65, 7, 9, 3]

// const result = arrayZip(a, b, (left, right) => left * right)

// console.log(result)

// Rx.Observable.range(1, 10)
//   .zip(
//     Rx.Observable.interval(250),
//     (left, right) => `left: ${left}, right: ${right * 500}`
//   )
//   .subscribe(createSubscriber('zip'))

// Rx.Observable.interval(500)
//   .withLatestFrom(Rx.Observable.interval(250))
//   .take(4)
//   .subscribe(createSubscriber('withLatestFrom'))

// Rx.Observable.interval(500)
//   // .combineLatest(Rx.Observable.interval(250))
//   .combineLatest(Rx.Observable.interval(250), (left, right) => left * right)
//   .take(4)
//   .subscribe(createSubscriber('combineLatest'))

const currentUser$ = new Rx.BehaviorSubject({ isLoggedIn: false })

Rx.Observable.interval(250)
  // .withLatestFrom(currentUser$)
  .combineLatest(currentUser$)
  .filter(([i, user]) => user.isLoggedIn)
  .subscribe(createSubscriber('withLatestFrom'))

setTimeout(() => currentUser$.next({ isLoggedIn: true }), 1000)
