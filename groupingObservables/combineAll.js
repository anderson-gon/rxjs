const { of, interval } = require('rxjs');
const { combineAll, take } = require('rxjs/operators');

//emit a value after 2s
const source1 = of('a', 'b', 'c');
const source2 =  interval(2000)
                    .pipe(
                        take(3) //take 3 elements and unsubscribe
                    );

//will take the last emitted value from each source                    
of(source1, source2)
    .pipe(
        combineAll()        
    )
    .subscribe(([val1, val2]) => {
        console.log(`${val1} - ${val2}`)
    });
