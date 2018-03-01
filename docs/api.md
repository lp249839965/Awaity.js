# API


#### map(iterable, mapper, { concurrency: Infinity })

```js
import { map } from 'littlebird';

const posts = await map([1,2,3], async (id) => {
    const res = await fetch(`/api/posts/${id}`);
    return res.json();
});
```

```js

import { map as mapAsync } from 'littlebird';

const promises = [1,2,3].map(async (id) => {
    const res = await fetch(`/api/posts/${id}`);
    return res.json();
});

const titles = await mapAsync(promises, (post) => post.title);
```


#### mapSeries

```js
import { mapSeries } from 'littlebird';

const results = await async.mapSeries();
```

#### reduce

```js
import { reduce as reduceAsync } from 'littlebird';

const results = await reduceAsync(promises, async (count, num) => {
    return count + num
}, 0);
```

#### all(Iterable<any>|Promise<Iterable<any>> input) -> Promise<Array<any>>

```js
import { all } from 'littlebird';

const results = await all(promises);

results // [...,...,...,...]
```

#### props(Object|Map|Promise<Object|Map> input) -> Promise

```js
import { props } from 'littleBird';

const results = await props({
    one: promise,
    two: 'value'
});

results // { one: ..., two: ... }
```


#### each

```js
const results = await async.each();
```

#### filter

```js
const results = await async.filter();
```

#### some

```js
const results = await async.some();
```

#### race

```js
const results = await async.race(promises);
```

#### any

```js
const results = await async.any();
```