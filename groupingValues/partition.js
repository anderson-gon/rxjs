const { of } = require('rxjs');
const { partition } = require('rxjs/operators');

const source = [1,2,3,4,5,6,7,8,9];

//will divide the source into 2 observables by a predicate
const [even, odd] = of(...source)
                        .pipe(
                            partition(x => x % 2 === 0)
                        );    

console.log('Even numbers');
even    
    .subscribe(x => console.log(x));

console.log('Odd numbers');
odd    
    .subscribe(x => console.log(x));