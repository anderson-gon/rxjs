const { interval, tiner, timer } = require('rxjs');
const { audit, tap, take } = require('rxjs/operators');

const source = interval(100);

//Will take 10 emitted values from the interval, the audit will receive a signal after 500ms and
//will emit a new observable and pass the last value for the subscribes
source  
    .pipe(
        take(10),
        tap(x => console.log(`emitted form source ${x}`)),
        audit(x => {
            console.log(`Used to calculate next Observable ${x}`);
            return timer(500);
        })
    )
    .subscribe(
        x => console.log(`received by subscribers: ${x}`)
    );