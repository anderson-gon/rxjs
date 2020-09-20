const { of } = require('rxjs');
const { skipWhile } = require('rxjs/operators');

//will skip all emitted values that attends the condition inside the skipWhile 
of(1, 2, 3, 4, 5, 6)
    .pipe(
        skipWhile(x => x < 4)
    )
    .subscribe(x => console.log(x));
