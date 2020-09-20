const { of } = require('rxjs');
const { takeWhile } = require('rxjs/operators');

//will take the emitted values until a signal attends the condition inside takeWhile
of(1, 2, 3, 4, 5, 6, 4)
    .pipe(
        takeWhile(x => x < 5 )
    )
    .subscribe(x => console.log(x));