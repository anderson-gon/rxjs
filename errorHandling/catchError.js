const { throwError, of } = require('rxjs');
const { catchError, map } = require('rxjs/operators');

throwError('error')
    .pipe(
        catchError(err => {
            console.log(`catch an error: ${err}`);
            return throwError(`rethrow: ${err}`);
        }),
        catchError(err => {
            console.log(`on 2 catchError : ${err}`);
            return of(undefined);
        })
    )
    .subscribe(
        d => {
            if (d) {
                console.log(d);
            }
        },
        err => console.log('ops'),
        () => console.log('complete')
    );

    console.log('second example');

    of('a', 1)
        .pipe(
            map(x => x.toUpperCase()),
            catchError(err => {
                return of(undefined)
            })
        )
        .subscribe(
            x => {
                if (x) {
                    console.log(x);
                }
            },
            err => console.log('ops'),
            () => console.log('complete')
        );