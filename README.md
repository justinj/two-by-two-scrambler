#two-by-two-scrambler

This is mostly a proof-of-concept for using [sol](https://github.com/justinj/sol) to create scramblers.
The entire api is just a function which returns a scramble.

This is very not-stable as it presently depends on a github branch for a not-published repo.

Eventually we would support other options like scramble filtering and seeding.

##API

```
import getScramble from 'two-by-two-scrambler';

let scramble = getScramble();
// => "F R U R' U2 F2 R' U' F' U2"
```
