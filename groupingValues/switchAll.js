const { of, Subject } = require('rxjs');
const { switchAll, delay, endWith, tap } = require('rxjs/operators');

const origin = new Subject();

const sourceA = of('A1', 'A2', 'A3', 'A4')
                    .pipe(
                        tap(x => (x.indexOf(1) > -1 ? console.log('begin A') : '')),
                        endWith('end of A')
                    );

const sourceB = of('B1', 'B2')
                    .pipe(
                        tap(x => (x.indexOf(1) > -1 ? console.log('begin b') : '')),
                        delay(100),
                        endWith('end of B')
                    );
                    
const sourceC = of('C1', 'C2', 'C3')
                    .pipe(
                        tap(x => (x.indexOf(1) > -1 ? console.log('begin C') : '')),
                        endWith('end of C')
                    );                    


origin.pipe(switchAll()).subscribe(x => console.log(x));
origin.next(sourceA);

setTimeout(() => origin.next(sourceB), 1000); //B is dropped because the sourceC starts to emit before B finish
setTimeout(() => origin.next(sourceC), 1000);
