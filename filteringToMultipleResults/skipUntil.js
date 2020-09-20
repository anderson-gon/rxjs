const { timer } = require('rxjs');
const { skipUntil, take } = require('rxjs/operators');

//the timer emits a value on a scheduler of 1000 ms
//it will skip all emitted values until a notifier emits a value at 3000 ms
timer(0, 1000)
    .pipe(
        take(6),
        skipUntil(timer(3000))
    )
    .subscribe(x => console.log(x));