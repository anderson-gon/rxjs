const { of } = require('rxjs');
const { groupBy, mergeMap, toArray, reduce } = require('rxjs/operators');

const posts =[
    { id: 1, likes: 2, comments: 0 },
    { id: 1, likes: 1, comments: 1 },
    { id: 2, likes: 2, comments: 1 },
    { id: 3, likes: 1, comments: 0 },
    { id: 2, likes: 0, comments: 1 },
    { id: 2, likes: 3, comments: 1 },
    { id: 1, likes: 0, comments: 1 }
]

//will group the posts by id and emit values as a array 
const arr = of(...posts)
    .pipe(
        groupBy(post => post.id),
        mergeMap(group$ => group$.pipe(toArray()))
    );

arr
    .subscribe(x => console.log(x));

//Sum and grouping by id
console.log('****************');
console.log('Sum');
console.log('****************');

of(...posts)
    .pipe(
        groupBy(post => post.id),
        mergeMap(post => 
            post.pipe(
                reduce((acc, curr) => {
                    acc.id = acc.id || curr.id;
                    acc.likes += curr.likes;
                    acc.comments += curr.comments 
                    return acc;
                },
                {id: null, likes: 0, comments: 0})
            )
        )
    )
    .subscribe(post => console.log(post));
