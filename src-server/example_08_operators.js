import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'

// .map - projects the value in the stream
// Rx.Observable.range(1, 10)
//   .map(a => a * a)
//   .subscribe(createSubscriber('map'))

// function arrayMap(array, projection) {
//   const returnArray = []
//   for (let item of array) {
//     returnArray.push(projection(item))
//   }
//   return returnArray
// }

// function arrayMergeMap(array, projection) {
//   const returnArray = []
//   for (let item of array) {
//     const projectedArray = projection(item)
//     for (let projected of projectedArray) {
//       returnArray.push(projected)
//     }
//   }
//   return returnArray
// }

// const albums = [
//   {
//     title: 'Album 1',
//     tracks: [
//       { id: 1, title: 'Track 101' },
//       { id: 2, title: 'Track 102' }
//     ]
//   },
//   {
//     title: 'Album 2',
//     tracks: [
//       { id: 3, title: 'Track 201' },
//       { id: 4, title: 'Track 202' }
//     ]
//   }
// ]

// const tracksWrong = arrayMap(albums, album => album.tracks)
// const tracksRight = arrayMergeMap(albums, album => album.tracks)

// console.log(JSON.stringify(tracksRight))

// Rx.Observable.range(2, 3)
//   .mergeMap(i =>
//     Rx.Observable.timer(i * 1000).map(() => `After ${i * 2} seconds`)
//   )
//   .subscribe(createSubscriber('mergeMap'))

// function getTracks() {
//   return new Promise(resolve =>
//     setTimeout(() => resolve(['track 1', 'track 2', 'track 3']), 500)
//   )
// }

// Rx.Observable.fromPromise(getTracks())
//   .mergeMap(Rx.Observable.from)
//   .subscribe(createSubscriber('tracks'))

function query(value) {
  return new Promise(resolve =>
    setTimeout(() => resolve(`THIS VALUE: ${value}`), 500)
  )
}

Rx.Observable.of('my-query')
  .do(() => console.log('Before'))
  .mergeMap(a => query(a))
  .do(() => console.log('After'))
  .subscribe(createSubscriber('query'))
