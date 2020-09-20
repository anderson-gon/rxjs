const { interval } = require('rxjs');
const { map, retryWhen, scan, takeWhile, tap } = require('rxjs/operators');

let noThrowErrOnSubscribeCallback = false;

interval(200)
    .pipe(
        map(x => {
            console.log(`attempting: ${x}`)
            if (x === 1) {
                throw `Error processing ${x}`;
            }
            return x;
        }),
        retryWhen(errors => {
            if (noThrowErrOnSubscribeCallback) {
                return errors
                    .pipe(
                        tap(err => console.log(err)),
                        scan(retryCount => retryCount + 1, 0),
                        tap(retryCount => {
                            if (retryCount === 2) {
                                console.log('Showing error and completing');
                            } else {
                                console.log('Retrying whole source');
                            }
                            return retryCount;
                        }),
                        takeWhile(retryCount => retryCount < 2) //retry limits here 
                    );
            } else {
                return errors
                    .pipe(
                        tap(err => console.log(err)),
                        scan(retryCount => retryCount + 1, 0),
                        tap(retryCount => {
                            if (retryCount === 2) { //retry limits here will callback a error on subscribe
                                console.log('Failing log');
                                throw 'oops';
                            } else {
                                console.log('Retrying whole source');
                            }
                        })
                    )
            }
        })
    )
    .subscribe(
        x => console.log(`succefully procesed: ${x}`),
        err => console.log(`***Error on subscribe callback: ${err}`),
        () => console.log('completed sucefully')
    );