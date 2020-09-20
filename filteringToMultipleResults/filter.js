const { of } = require('rxjs')
const { filter } = require('rxjs/operators')

of(1,2,3,4,5,6,7,8,9)
    .pipe(
        filter(x => x % 2 === 0)        
    )
    .subscribe(x => console.log(x));
