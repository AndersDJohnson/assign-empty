# assign-empty
> Immutable Object.assign.

Immutable [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
, always copying to a fresh empty object target.

```
npm i --save assign-empty
```

```js
import assignEmpty from 'assign-empty'; // or: var assignEmpty = require('assign-empty');

var a = {k: {j: 1}, v: 2};
var b = assignEmpty(a, {k: 3}, {m: 4}, {k: 5});

console.log(a); // {k: {j: 1}, v: 2}
console.log(b); // {k: 5, v: 2, m: 4}
```
