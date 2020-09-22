const { of } = require('rxjs');
const { concatMap } = require('rxjs/operators');

//Take the emitted value, pass by a function and the result goes to the subscribe
of(1, 2, 3)
    .pipe(
        concatMap(x => [x, x * 2])
    )
    .subscribe(x => console.log(x));