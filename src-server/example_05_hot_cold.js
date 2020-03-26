import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'

// Concerting a cold observable into a hot observable

// const interval$ = Rx.Observable.interval(500)
//   .take(10)
//   .publish()

// setTimeout(() => interval$.connect(), 2000)

// setTimeout(() => interval$.subscribe(createSubscriber('one')), 500)

// setTimeout(() => interval$.subscribe(createSubscriber('two')), 1500)

// const socket = { on: () => {} }

// const  chatMessages$ = new Rx.Observable(observer => {
//   console.log('subscribed')
//   socket.on('chat:message', message => observer.next(message))
// }).publish()

// chatMessages$.connect()

// chatMessages$.subscribe(createSubscriber('one'))
// chatMessages$.subscribe(createSubscriber('two'))

const simple$ = new Rx.Observable(observer => {
  observer.next('one')
  observer.next('two')
  observer.next('three')
  // observer.complete()

  return () => console.log('Disposed')
})

// const published$ = simple$.publishLast()
// const published$ = simple$.publishReplay(2)
// const published$ = simple$.publishReplay(2).refCount()
// const published$ = simple$.publish().refCount()
const published$ = simple$.share()

const sub1$ = published$.subscribe(createSubscriber('1'))
// const connection$ = published$.connect()
const sub2$ = published$.subscribe(createSubscriber('2'))
// setTimeout(() => published$.subscribe(createSubscriber('3')), 1000)

sub1$.unsubscribe()
sub2$.unsubscribe()

// connection$.unsubscribe()
