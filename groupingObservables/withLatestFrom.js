const { timer, of } = require('rxjs');
const { withLatestFrom, map, take, delay } = require('rxjs/operators');

const source = timer(0, 300)
                    .pipe(
                        take(3),
                        map(i => `A${i}`)
                    );

const internal1 = timer(0, 100)
                    .pipe(
                        take(10),
                        map(i => `B${i}`)
                    );

const interna2 = of('C').pipe(delay(10));

source
   .pipe(
       withLatestFrom(internal1, interna2)            
   )
   .subscribe(x => console.log(x));

