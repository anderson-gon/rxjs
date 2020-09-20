const { timer } = require('rxjs');
const { takeUntil } = require('rxjs/operators');

const source = timer(0, 1000);

//will take the elements emitteds from the source until the notifier emits a signal
source
    .pipe(
        takeUntil(timer(3000))
    )
    .subscribe(
        x => console.log(x)
    );