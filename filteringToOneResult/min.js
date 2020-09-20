const { of } = require('rxjs');
const { min, map } = require('rxjs/operators');

//will take the min value and will unsubscribe
const source =  of(2, 3, 4, 5, 6, -1, 10)
source    
    .pipe(
        min()
    )
    .subscribe(x => console.log(`min element of the source ${x}`));


//will take the min value and will unsubscribe
source    
    .pipe(
        map(x => Math.abs(x)), //making the emitted value absolute first
        min()        
    )
    .subscribe(x => console.log(`min element of abs in the source ${x}`));    