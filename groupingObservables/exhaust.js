const { of } = require('rxjs');
const { exhaust, delay } = require('rxjs/operators')

const source1 = of('A', 'B', 'C')
                    .pipe(delay(100));

const source2 = of('D');

//the source2 is ignored on the emitted values because source1 is still processing
of(source1, source2)
    .pipe(
        exhaust()
    )
    .subscribe(x => console.log(x));