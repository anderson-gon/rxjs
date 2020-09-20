const { interval } = require('rxjs');
const { buffer, take } = require('rxjs/operators');

interval(100)
    .pipe(
        buffer(interval(1000)),
        take(3)
    )
    .subscribe(d => console.log(d));