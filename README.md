# assign-empty
> Immutable Object.assign.

Immutable [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
, always copying to a fresh empty object target.

```js
import assignEmpty from 'assign-empty';

var a = {k: 1};
var b = assignEmpty({k: 2});

console.log(a); // {k: 1}
console.log(b); // {k: 2}
```
