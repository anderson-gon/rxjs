const { of } = require('rxjs');
const { single } = require('rxjs/operators');

const source = of(1, 2, 3);

//will return the single value of the source, if there are more than 1 element returned by the condition
//we will receive an error as a callback
source
    .pipe(
        single(x => x % 2 === 0)
    )
    .subscribe(
        x => console.log(`Even single element: ${x}`)
    );

//will receive an undefined callback on next
source
    .pipe(
        single(x => x > 3)
    )
    .subscribe(
        x => console.log(`An element greater than 3: ${x}`) //undefined callback here
    );

//will receive an error in the subscribe callback because more exists more than on element tah math 
//the condition
source
    .pipe(
        single(x => x > 1)
    )
    .subscribe(
        x => console.log(`An element greater than 1: ${x}`),
        err => console.log(`Error : ${err}`)
    );