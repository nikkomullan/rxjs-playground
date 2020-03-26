import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'

// function arrayReduce(array, accumulator, startValue) {
//   let value = startValue
//   for (let item of array) {
//     value = accumulator(value, item)
//   }
//   return value
// }

// const values = [45, 456, 324, 546]
// const sum = arrayReduce(values, (acc, i) => acc + i, 0)
// const max = arrayReduce(values, (max, i) => (max > i ? max : i), -1)

// console.log({ sum, max })

// Rx.Observable.range(1, 10)
//   // .merge(Rx.Observable.never())
//   .scan((acc, i) => acc + i)
//   // .reduce((acc, i) => acc + i)
//   .subscribe(createSubscriber('reduce'))

Rx.Observable.range(1,10)
  .map(i => i*i)
  .scan(([last], current) => [current, last]. [])
  .subscribe(createSubscriber('reduce'))
