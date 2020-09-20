const { timer } = require('rxjs');
const { windowToggle, switchMap, toArray, take } = require('rxjs/operators');

const openSignal = timer(0, 500); // emit open signal after 500 ms
const closeSignal = () => timer(200); //emit close signal afet 200 ms

//Simulating a source
timer(0, 100) //from 100 ms emits a signal
    .pipe(
        take(36),
        windowToggle(openSignal, closeSignal),
        switchMap(x => x.pipe(toArray()))
    )
    .subscribe(x => console.log(x));