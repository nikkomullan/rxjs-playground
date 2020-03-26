import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'

function getApi() {
  return new Rx.Observable(observer => {
    console.log('Getting API')
    setTimeout(() => {
      // observer.next('Hi')
      observer.error(new Error('Oh noo!'))
      // observer.complete()
    }, 500)
  })
}

getApi()
  .retry(3)
  // .catch(error => Rx.Observable.of(error))
  .do(() => console.log('Thing'))
  .subscribe(createSubscriber('retry/catch'))
