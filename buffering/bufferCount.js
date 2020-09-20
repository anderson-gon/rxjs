const { of } = require('rxjs');
const { bufferCount } = require('rxjs/operators');


//Returning 2 elements in a array (buffer returning type)
of(1,2,3,4,5)
    .pipe(bufferCount(2))
    .subscribe(x => {
        console.log(x);
    });


console.log('Now from each emitted value');    
//Returning 2 elements in a array (buffer returning type) but 
//in each emitted value
of(1,2,3,4,5)
    .pipe(bufferCount(2,1))
    .subscribe(x => console.log(x));

