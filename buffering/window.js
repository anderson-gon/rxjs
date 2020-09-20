const { interval } = require('rxjs');
const { window, take, switchMap, toArray } = require('rxjs/operators');


//window emits a observable to take the value we need to use switchMap
interval(100)
    .pipe(
        window(interval(1000)),
        take(3),
        switchMap(w => w.pipe(toArray()))
    )
    .subscribe(d => {
        console.log(d);
    })