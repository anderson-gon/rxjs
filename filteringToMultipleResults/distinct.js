const { of } = require('rxjs');
const { distinct } = require('rxjs/operators');

//will distint the emitted values of the entire stream on output 
of(1, 2, 2, 3, 4, 4, 2, -2)
    .pipe(
        distinct(x => Math.abs(x)) //or just distinct() but -2 will be shown
    )
    .subscribe(x => console.log(x));


of(
    { name: 'Anderson', isAuthor: false },
    { name: 'Eric Evans', isAuthor: true },
    { name: 'Vaughn Vernon', isAuthor: true },
    { name: 'Ben Lesh', isAuthor: true },
    { name: 'Tracy Lee', isAuthor: true },
    { name: 'Anderson', isAuthor: false }
)    
    .pipe(
        distinct(x => x.name)
    )
    .subscribe(x => console.log(`Name ${x.name} is an author ${x.isAuthor}`));
