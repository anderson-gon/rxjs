const { of } = require('rxjs');
const { throwIfEmpty } = require('rxjs/operators');

//throw if source are empty
of()
    .pipe(throwIfEmpty())
    .subscribe(
        v => console.log(v),
        err => console.log(`Error : ${err.message}`)
    );