const { timer } = require('rxjs');
const { windowTime, switchMap, take, toArray } = require('rxjs/operators');

const source = timer(0, 100).pipe(take(9));

source
    .pipe(
        windowTime(200),
        switchMap(x => x.pipe(toArray()))
    )
    .subscribe(x => console.log(x));