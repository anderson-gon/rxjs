const { of } = require('rxjs');
const { distinctUntilChanged } = require('rxjs/operators');

//Will compare the value emitted with the earlier one
//
of(1, 2, 2, 3, 4, 4, 2)
    .pipe(
        distinctUntilChanged()
    )
    .subscribe(x => console.log(x));
