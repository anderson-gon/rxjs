const { interval } = require('rxjs');
const { take, toArray } = require('rxjs/operators');

//will take a sequence of emitted values and transform them it a array
interval(100)
    .pipe(
        take(9),
        toArray()
    )
    .subscribe(x => console.log(x));