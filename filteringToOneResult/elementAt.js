const { of } = require('rxjs');
const { elementAt } = require('rxjs/operators');

of(1, 2, 3, 4, 5)
    .pipe(
        elementAt(3)
    )
    .subscribe(
        x => console.log(x)
    );

