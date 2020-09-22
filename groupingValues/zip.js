const { of } = require('rxjs');
const { zipAll } = require('rxjs/operators');

const source1 = of('A', '1', 'a');
const source2 = of('B', '2', 'b');

//Will zip what source1 and source2 emitted into a new array with this values

//Output
//[ 'A', 'B' ]
//[ '1', '2' ]
//[ 'a', 'b' ]

of(source1, source2)
    .pipe(
        zipAll()
    )
    .subscribe(x => console.log(x));