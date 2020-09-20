const { of } = require('rxjs');
const { onErrorResumeNext, map } = require('rxjs/operators');

const source = of('feed1', 'feed2', 'feed3');
const backup = of('handle error', 'complete message');

//will make a goto if we throw a error (we will not see the throw message),
//if no errors occurs the goto to will happens as well
source  
    .pipe(
        map(feed => {
            if (feed === 'feed2a') {
                throw new Error(`some error happens, but we will never see this message`);
            }
            return feed;
        }),
        onErrorResumeNext(backup)
    )
    .subscribe(x => console.log(x));
