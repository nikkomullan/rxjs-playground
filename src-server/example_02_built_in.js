import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'

// Rx.Observable.interval(500)
//   .take(5)
//   .subscribe(createSubscriber('one'))

Rx.Observable.timer(5000, 500)
  .take(3)
  .subscribe(createSubscriber('timer')) //
