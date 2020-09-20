const { of } = require('rxjs');
const { find } = require('rxjs/operators');

//will return the first element that match with the condition and will unsubscribe
of(1, 2, 3, 7, 4, 5)
    .pipe(
        find(x => x > 3)
    )
    .subscribe(
        x => console.log(x)
    );

