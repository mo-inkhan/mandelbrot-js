/**
 * Project Mandelbrot
 *
 * @author      Moin Khan
 * @copyright   Moin Khan
 *
 * @link https://mo.inkhan.dev
 *
 */
import { complexADD, complexMod, complexSquare } from "./complex";
class Mandelbrot {
    MAX_ITERATIONS;
    constructor(MAX_ITERATIONS) {
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
    getOrbit(number) {
        let value = [0, 0];
        let values = [];
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
    isMandelbrot(number) {
        let value = [0, 0];
        for (let i = 0; i <= this.MAX_ITERATIONS; i++) {
            value = this.#getNextCordinates(value, number);
            if (complexMod(value) > 2)
                return [false, i];
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
    #getNextCordinates(current, number) {
        return complexADD(complexSquare(current), number);
    }
}
export default Mandelbrot;
