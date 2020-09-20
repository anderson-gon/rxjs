const { of } = require('rxjs');
const { first } = require('rxjs/operators');

//will take the first value and will unsubscribe
const source =  of(1, 2, 3, 4, 5, 6)
source    
    .pipe(
        first()
    )
    .subscribe(x => console.log(`first element of the source ${x}`));

//getting the first value by a function
source
    .pipe(
        first(x => x % 2 === 0)
    ) 
    .subscribe(x => console.log(`first even element of the source ${x}`));  


//callback an error for the subscribes because not found a element matching to the condition
source
    .pipe(
        first(x => x > 6)
    )
    .subscribe(
        x => console.log(`first element greather than 6`),
        err => console.log(`Error: ${err}`)
    );     