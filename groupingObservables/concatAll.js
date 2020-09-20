const { of, interval } = require('rxjs');
const { concatAll, take } = require('rxjs/operators');

//emit a value after 2s
const source1 = of('a', 'b', 'c');
const source2 =  interval(2000)
                    .pipe(
                        take(3) //take 3 elements and unsubscribe
                    );

//will take the elements into a single output
of(source1, source2)
    .pipe(
        concatAll()        
    )
    .subscribe(x => console.log(x));
