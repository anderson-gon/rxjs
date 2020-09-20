const { Observable } = require('rxjs');
const { timeout } = require('rxjs/operators');

const source = Observable.create(observer => {
    observer.next('A');
    setTimeout(() => { observer.next('B') }, 100); //emitted at 100ms
    setTimeout(() => { observer.next('C') }, 300); //emitted at 200ms
    setTimeout(() => { observer.complete() }, 600); //emitted at 300ms
})

//The emitss timespan between each value does not achieve 350 ms... 
//it will succefuly completed
/*source 
    .pipe(
        timeout(350)
    )
    .subscribe(
        x => console.log(x),
        null,
        ()=> console.log('Complete')
    );
*/    

//The emitss timespan between B to C will take 200ms more then the 150ms configured... 
//it will take the error callback on subscribe
/*source 
    .pipe(
        timeout(150)
    )
    .subscribe(
        x => console.log(x),
        err => console.log(err),
        ()=> console.log('Complete')
    );
*/

//Another way to process timeout is for the full batch processing on stream achieve a timeout
//In this case complete will happens after 600ms achieving the 500 ms configured by timeout
//taking a error callback on subscribe
const timeoutAt = new Date(Date.now() + 500); //date is 500 ms from now
source
    .pipe(
        timeout(timeoutAt)
    )
    .subscribe(
        x => console.log(x),
        err => console.log(err),
        () => console.log('Completed')
    );