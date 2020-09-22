const { of } = require('rxjs');
const { pairwise, filter, first } = require('rxjs/operators');

const source = [1,2,3,4,5];

//will emitt values in pair
of(...source)
    .pipe(pairwise())
    .subscribe(x => console.log(x));

const source2 = [10, 12, 10, 16, 20];

//will emitt values in pair with a filter function

of(...source2)
    .pipe(
        pairwise(),
        filter(([p1, p2]) => p2 - p1 < 0),
        first()
    )
    .subscribe(([p1, p2]) => console.log(`${p1}, ${p2}`)); //when it get the first pair 12 and 10 and decrease (10 - 12) the result -2 is < 0