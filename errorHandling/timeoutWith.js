const { Observable, of } = require('rxjs');
const { timeoutWith } = require('rxjs/operators');

const fallback = of('a', 'b', 'c');

const source = Observable.create(observer => {
    observer.next('A');
    setTimeout(() => observer.next('B'), 100); //emitted at 100ms
    setTimeout(() => observer.next('C'), 300); //emitted at 200ms
    setTimeout(() => observer.complete(), 600); //emitted at 300ms
});

//In this case the C value will not be logged because the timeout will be achieved
//and the fallback will be emitted
source
    .pipe(
        timeoutWith(150, fallback)
    )
    .subscribe(
        x => console.log(x),
        err => console.log(err),
        () => console.log('Completed')
    );
