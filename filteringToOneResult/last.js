const { of } = require('rxjs');
const { last } = require('rxjs/operators');

//will take the last value and will unsubscribe
const source =  of(1, 2, 3, 4, 5, 6)
source    
    .pipe(
        last()
    )
    .subscribe(x => console.log(`last element of the source ${x}`));

//getting the last value by a function
source
    .pipe(
        last(x => x % 2 === 0)
    ) 
    .subscribe(x => console.log(`last even element of the source ${x}`));  


//callback an error for the subscribes because not found a element matching to the condition
source
    .pipe(
        last(x => x > 6)
    )
    .subscribe(
        x => console.log(`last element greather than 6`),
        err => console.log(`Error: ${err}`)
    );     