# JS Compare [![Build Status](https://travis-ci.com/sonofjavascript/js-compare.svg?branch=master)](https://travis-ci.com/sonofjavascript/js-compare) [![Coverage Status](https://coveralls.io/repos/github/sonofjavascript/js-compare/badge.svg)](https://coveralls.io/github/sonofjavascript/js-compare)

<img src='https://www.brickfieldidiomas.com/wp-content/uploads/2015/12/Comparing_Apples_to_OrangesjsxDetail.png' />

Lightweight (16K) and simple Javascript tool to compare equality with **objects**, **arrays** and other Javascript object types.

Note: *Errors and Functions objects are not allowed to compare*.

## Installation

```
npm install --save js-compare
```

## Methods
### `equal`
Compares if two javascript objects are equal. 

#### Objects
The keys are compared with the values. Objects will be equally true when have the same keys with the same values. Values can be objects itself or whatever Javascript object type.
```
import { equal } from '@sonofjavascript/js-compare'

const object1 = { key: '::value::' }
const object2 = { key: '::value::' }
const object3 = { key: '::value3::' }

equal(object1, object2) // true
equal(object1, object3) // false
```

#### Arrays
An array can contain any kind of Javascript object type. The only matters is the order and the items value.
```
import { equal } from '@sonofjavascript/js-compare'

const array1 = ['::value1::', '::value2::']
const array2 = ['::value1::', '::value2::']
const array3 = ['::value2::', '::value1::']

equal(array1, array2) // true
equal(array1, array3) // false
```

#### Atomic types
Simple javascript types can be compared too, although these comparations can be implemented in a much more simple way in pure Javascript with the `===` operator.

```
import { equal } from '@sonofjavascript/js-compare'

equal(1, 1) // true
equal(1, 2) // false

equal('::string::', '::string::') // true
equal('::string1::', '::string2::') // false

equal(Symbol('::symbol::', Symbol('::symbol::')) // true
equal(Symbol('::symbol1::', Symbol('::symbol2::')) // false

equal(true, true) // true
equal(true, false) // false

equal(null, null) // true
equal(null, undefinded) // false

equal() // true
equal(undefined, undefined) // true
equal(null, undefinded) // false
```

### `isEmpty`
Check if a Javascript object is empty.

#### Objects
Check if is not defined or has no keys.
```
import { isEmpty }  from '@sonofjavascript/js-compare'

isEmpty() // true
isEmpty({}) // true
isEmpty({ key: '::value::' }) // false
```

#### Arrays
Check if is not defined or has more than one items.
```
import { isEmpty }  from '@sonofjavascript/js-compare'

isEmpty() // true
isEmpty([]) // true
isEmpty(['::value::']) // false
```

#### Atomic types
Simple javascript types can be checked if it is empty too, although you can do it simplier comparing it to `undefined`/`null` without using this library.
```
import { isEmpty }  from '@sonofjavascript/js-compare'

isEmpty() // true
isEmpty(null) // true
isEmpty('::value::') // false
```

## Contributing
Contributions welcome; Please submit all pull requests the against master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author
Albert Pérez Farrés 

## License
 - **MIT** : http://opensource.org/licenses/MIT
