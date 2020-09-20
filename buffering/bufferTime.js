const { interval } = require('rxjs');
const { bufferTime, take } = require('rxjs/operators');

interval(1000)
    .pipe(
        take(6),
        bufferTime(2000)
    )
    .subscribe(x => console.log(x));