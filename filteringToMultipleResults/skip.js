const { of } = require('rxjs');
const { skip } = require('rxjs/operators');

//will ignore the first two emitted values
of(1,2,3)
    .pipe(
        skip(2) 
    )
    .subscribe(x => console.log(x));