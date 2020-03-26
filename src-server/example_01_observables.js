import Rx from 'rxjs/Rx'

// --------------------------------------------------
// Part 1

// const promise = new Promise(resolve => {
//   console.log('In promise')
//   resolve('Hey')
// })

// promise.then(console.log)

// const simple$ = new Rx.Observable(observer => {
//   console.log('Generating observable')
//   setTimeout(() => {
//     observer.next('An item!')
//     setTimeout(() => {
//       observer.next('Another item')
//       observer.complete()
//     })
//   })
// })

// const error$ = new Rx.Observable(observer => {
//   observer.error(new Error('Oh no!'))
// })

// error$.subscribe(
//   item => console.log('one.next', item),
//   error => console.log('one.error', error),
//   () => console.log('one.complete')
// )

// setTimeout(() => {
//   simple$.subscribe({
//     next: item => console.log('two.next', item),
//     error(error) {
//       console.log('two.error', error)
//     },
//     complete: function() {
//       console.log('two.complete')
//     }
//   })
// }, 3000)

// --------------------------------------------------
// Part 2

function createSubscriber(tag) {
  return {
    next(item) {
      console.log(`${tag}.next ${item}`)
    },
    error(error) {
      console.log(`${tag}.error ${error.stack || error}`)
    },
    complete() {
      console.log(`${tag}.complete`)
    }
  }
}

function createInterval$(time) {
  let index = 0
  return new Rx.Observable(observer => {
    const interval = setInterval(() => {
      console.log('Generating', index)
      observer.next(index++)
    }, time)

    return () => {
      clearInterval(interval)
    }
  })
}

function take$(sourceObservable$, amount) {
  let count = 0
  return new Rx.Observable(observer => {
    const subscription$ = sourceObservable$.subscribe({
      next(item) {
        observer.next(item)
        if (++count >= amount) {
          // observer.error(new Error('I wanna finish'))
          observer.complete()
        }
      },
      error(error) {
        observer.error(error)
      },
      complete() {
        observer.complete()
      }
    })

    return () => {
      console.log('Unsubscribing from subscription$')
      subscription$.unsubscribe()
    }
  })
}

const everySecond$ = createInterval$(250)
const firstFiveSeconds$ = take$(everySecond$, 5)
const sub$ = firstFiveSeconds$.subscribe(createSubscriber('one'))
// setTimeout(() => {
//   sub$.unsubscribe()
// }, 2000)
