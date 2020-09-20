const { timer } = require('rxjs');
const { windowCount, switchMap, take, toArray } = require('rxjs/operators');

const source = timer(0, 100).pipe(take(9));
/*
source
    .pipe(
        windowCount(2), //will emit 2 itens
        switchMap(x => x.pipe(toArray())) //will emit a buffer in form of observable, switchMap take the actual values

    )
    .subscribe(x => console.log(x));
*/
console.log('Emitting 2 itnes and cut after 3 values ')

source
    .pipe(
        windowCount(2, 3),
        switchMap(x => x.pipe(toArray()))
    )
    .subscribe(x => console.log(x));
