const { of } = require('rxjs');
const { max } = require('rxjs/operators');

const source = [    
    { name : 'Juh', age : 28},
    { name : 'Mirna', age : 63},
    { name : 'Anderson', age : 35}
]

of(...source) 
    .pipe(
        max((x, y) => x.age > y.age ? 1 : -1)
    )
    .subscribe(x => console.log(`Person name: ${x.name}`));