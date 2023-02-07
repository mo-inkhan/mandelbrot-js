mandelbrot-js
=======

Author: **[Moin Khan](https://github.com/mo-inkhan)**

# mandelbrot-js: Discover the beauty of the Mandelbrot set with ease.

## Introduction

`mandelbrot-js` is a npm package that provides functionality to determine if a given number belongs to the Mandelbrot set and to generate the orbit of that number based on a starting value. The Mandelbrot set is a famous mathematical object that is a set of complex numbers that are generated through a recursive formula. It is famous for its intricate and detailed structure, which resembles a fractal pattern when visualized. This npm package provides a convenient way to explore the Mandelbrot set by allowing users to determine if a given number belongs to the set, and to visualize its orbit. To determine membership, the package uses a simple iterative algorithm to check how quickly the value of a number grows, and if it stays bounded it is considered to be a member of the Mandelbrot set. The orbit of a number is its path as it is transformed by the recursive formula over time, and this package allows users to easily visualize the orbit of any number they choose. Whether you are a math enthusiast, a student, or just interested in exploring the Mandelbrot set, this package provides a simple and intuitive way to do so.

## Installation:

#### via `npm`

    npm i mandelbrot-js

This will install `mandelbrot-js` and then it can be used as needed.

## Usage:

```ts
    const Mandelbrot = require('mandelbrot-js');

    const mandelbrot = new Mandelbrot();

    mandelbrot.getOrbit([0, 1]);
    mandelbrot.isMandelbrot([0, 1]);
```

## Available Options:

| Constructor options | Description                                                                                                                             | Defaults |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| `MAX_ITERATIONS`    | A parameter that determines the number of iterations the iterative algorithm will perform when checking if a number is diverging or not | 100      |

---

## Contributing
All contributions are welcome. Please create an issue first for any feature request
or bug. Then fork the repository, create a branch and make any changes to fix the bug
or add the feature and create a pull request. That's it!
Thanks!

---

## License
**mandelbrot-js** is released under the MIT License.
Check out the full license [here](LICENSE).
