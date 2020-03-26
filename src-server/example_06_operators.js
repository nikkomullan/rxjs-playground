import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'

// .do - Perform a side-effect with an itermediate result
Rx.Observable.range(1, 10)
  .do(a => console.log('From do', a))
  .map(x => x * x)
  .subscribe(createSubscriber('do'))

// .finally - A way to create side-effects when the sequence completes
Rx.Observable.range(1, 10)
  .finally(() => console.log('Finally!'))
  .map(a => a * a)
  .subscribe(createSubscriber('finally'))

// .filter - filter elements in the stream
Rx.Observable.range(1, 10)
  // .filter(a => a < 5)
  .filter(a => a < 2 || a > 4)
  .subscribe(createSubscriber('filter'))

// .startWith - start with a value before the interval has the change to emit its first value
Rx.Observable.interval(1000)
  .startWith(-1)
  .subscribe(createSubscriber('startWith'))
