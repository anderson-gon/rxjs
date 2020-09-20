//FLANTTEN combebing all down to one single output

const { of } = require('rxjs');
const { mergeAll, delay } = require('rxjs/operators');

const source1 = of(1, 2, 3).pipe(delay(10));

const source2 = of(4, 5, 6, 7, 8).pipe(delay(5));

of(source1, source2)
    .pipe(
        mergeAll(1)
    )
    .subscribe(x => console.log(x));