const { of } = require('rxjs');
const { skipLast } = require('rxjs/operators');

//Will ignore the last 2 emitted values
of(1, 2, 3)
    .pipe(
        skipLast(2)
    )
    .subscribe(x => console.log(x));