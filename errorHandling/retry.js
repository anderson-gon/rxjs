const { of } = require('rxjs');
const { retry, map } = require('rxjs/operators');

//will retry the fully stream untill the number of retries achieve resilience pattern
of('a', 1)
    .pipe(
        map(x => x.toUpperCase()),
        retry(2)
    )
    .subscribe(
        x => console.log(x),
        err => console.log(`Error: ${err}`)
    );    
