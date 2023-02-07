/**
 * Project Mandelbrot
 *
 * @author      Moin Khan
 * @copyright   Moin Khan
 *
 * @link https://mo.inkhan.dev
 *
 */

import { complexADD, complexMod, complexSquare, ICordinate } from "./complex";

class Mandelbrot {
    MAX_ITERATIONS: number;

    constructor(MAX_ITERATIONS?: number) {
        this.MAX_ITERATIONS = MAX_ITERATIONS ?? 100;
    }

    /**
     * The orbit of the critical point z=0 under iteration of the quadratic map
     *
     * @param {ICordinate} number Complex number
     *
     * @return {ICordinate[]} The sequence
     *
     */
    getOrbit(number: ICordinate): ICordinate[] {
        let value: ICordinate = [0, 0];
        let values: ICordinate[] = [];

        for (let i = 0; i <= this.MAX_ITERATIONS; i++) {
            value = this.#getNextCordinates(value, number);
            values.push(value);
        }

        return values;
    }

    /**
     * Check if the given complex number is a part of the Mandelbrot set
     *
     * @param {ICordinate} number Complex number
     *
     * @return {[boolean, number]} The sequence
     *
     */
    isMandelbrot(number: ICordinate): [boolean, number] {
        let value: ICordinate = [0, 0];

        for (let i = 0; i <= this.MAX_ITERATIONS; i++) {
            value = this.#getNextCordinates(value, number);
            if (complexMod(value) > 2) return [false, i]
        }

        return [true, this.MAX_ITERATIONS];
    }

    /**
     * Get the next point in the orbit
     *
     * @param {ICordinate} current Current function value
     * @param {ICordinate} number Initial point
     *
     * @return {ICordinate} The next point
     *
     */
    #getNextCordinates(current: ICordinate, number: ICordinate): ICordinate {
        return complexADD(complexSquare(current), number);
    }
}

export default Mandelbrot
