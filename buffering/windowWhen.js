const { timer } = require('rxjs');
const { windowWhen, take, tap, mergeAll, switchMap, toArray } = require('rxjs/operators');

const source = timer(0, 100).pipe(take(9));
const notifier = () => timer(200); //will close buffer and emit a new one

source  
    .pipe(
        windowWhen(notifier),
        tap(() => console.log('new buffer')),
        mergeAll()
        //switchMap(x => x.pipe(toArray()))
    )
    .subscribe(x => console.log(x));
