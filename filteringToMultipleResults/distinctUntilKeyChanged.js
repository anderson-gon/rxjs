const { of } = require('rxjs');
const { distinctUntilKeyChanged } = require('rxjs/operators');

const people = [
    { id: 1, name : 'Eric Evans'},
    { id: 2, name : 'Uncle Bob'},
    { id: 3, name : 'Uncle Bob'},
    { id: 4, name : 'Vaughn Vernon' },
    { id: 5, name : 'Ben Lesh' },
    { id: 6, name : 'Tracy Lee' },
    { id: 7, name : 'Uncle Bob' },
]

//Will compare the value emitted with the earlier one by a key property
of(...people) 
    .pipe(
        distinctUntilKeyChanged('name')
    )
    .subscribe(x => console.log(`Id ${x.id} Name ${x.name}`));