const { timer } = require('rxjs');
const { take } = require('rxjs/operators');

const source = timer(0, 100);

source
    .pipe(
        take(5)
    )
    .subscribe(
        x => console.log(x),
        null,
        ()=> console.log('Complete')
    );
