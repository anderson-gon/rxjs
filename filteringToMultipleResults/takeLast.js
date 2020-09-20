const { of } = require('rxjs');
const { takeLast } = require('rxjs/operators');

const source = of(1, 2, 3, 4, 5, 6, 7, 8);

//will take the last 5 elements emitteds from the source
source
    .pipe(
        takeLast(5)
    )
    .subscribe(
        x => console.log(x),
        null,
        () => console.log('Completed')
    );